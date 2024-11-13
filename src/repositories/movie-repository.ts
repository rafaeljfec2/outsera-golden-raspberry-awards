import db from "../db/connection";

export const createMoviesTable = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.run(
      `CREATE TABLE IF NOT EXISTS movies (
        year INTEGER,
        title TEXT,
        studios TEXT,
        producers TEXT,
        winner BOOLEAN
      )`,
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
};

export const insertMovie = (
  year: number,
  title: string,
  studios: string,
  producers: string,
  winner: boolean
): void => {
  const insert = db.prepare(
    "INSERT INTO movies (year, title, studios, producers, winner) VALUES (?, ?, ?, ?, ?)"
  );

  insert.run(year, title, studios, producers, winner, (err: any) => {
    if (err) {
      console.error("Error inserting movie:", err);
    }
  });

  insert.finalize();
};
