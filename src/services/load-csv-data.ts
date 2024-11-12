import fs from "fs";
import csv from "csv-parser";
import db from "../db/connection";

export const loadCsvData = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.run(`CREATE TABLE movies (
        year INTEGER,
        title TEXT,
        studios TEXT,
        producers TEXT,
        winner BOOLEAN
      )`);

      const insert = db.prepare(
        "INSERT INTO movies (year, title, studios, producers, winner) VALUES (?, ?, ?, ?, ?)"
      );

      fs.createReadStream("./data/movielist.csv")
        .pipe(csv({ separator: ";" }))
        .on("data", (row) => {
          const isWinner = row.winner?.toLowerCase() === "yes";
          insert.run(row.year, row.title, row.studios, row.producers, isWinner);
        })
        .on("end", () => {
          insert.finalize();
          resolve();
        })
        .on("error", reject);
    });
  });
};
