import db from "../db/connection";
import { AwardInterval, AwardIntervalsResponse } from "../types";

const getProducerIntervals = (): Promise<AwardIntervalsResponse> => {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT producers, year as previousWin, LEAD(year) OVER (PARTITION BY producers ORDER BY year) AS followingWin
            FROM movies
            WHERE winner = true
            ORDER BY producers, year`,
      (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        const intervals: AwardInterval[] = rows
          .filter((row: any) => row.followingWin)
          .map((row: any) => ({
            producers: row.producers,
            interval: row.followingWin - row.previousWin,
            previousWin: row.previousWin,
            followingWin: row.followingWin,
          }));

        const minInterval = Math.min(...intervals.map((i) => i.interval));
        const maxInterval = Math.max(...intervals.map((i) => i.interval));

        resolve({
          min: intervals.filter((i) => i.interval === minInterval),
          max: intervals.filter((i) => i.interval === maxInterval),
        });
      }
    );
  });
};

export default getProducerIntervals;
