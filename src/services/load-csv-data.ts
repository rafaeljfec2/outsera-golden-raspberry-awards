import fs from "fs";
import csv from "csv-parser";
import path from "path";
import {
  createMoviesTable,
  insertMovie,
} from "../repositories/movie-repository";

export const loadCsvData = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    createMoviesTable()
      .then(() => {
        const csvFilePath = path.join(
          __dirname,
          "..",
          "..",
          "data",
          "movielist.csv"
        );

        fs.createReadStream(csvFilePath)
          .pipe(csv({ separator: ";" }))
          .on("data", (row) => {
            const isWinner = row.winner?.toLowerCase() === "yes";
            insertMovie(
              Number(row.year),
              row.title,
              row.studios,
              row.producers,
              isWinner
            );
          })
          .on("end", () => {
            resolve();
          })
          .on("error", (err) => {
            reject(err);
          });
      })
      .catch(reject);
  });
};
