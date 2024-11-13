import db from "../db/connection";

export const fetchProducerAwards = (): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT producers, year as previousWin, LEAD(year) OVER (PARTITION BY producers ORDER BY year) AS followingWin
       FROM movies
       WHERE winner = true
       ORDER BY producers, year`,
      (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      }
    );
  });
};
