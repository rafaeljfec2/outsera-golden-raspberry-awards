import fs from "fs/promises";
import path from "path";
import { parse } from "csv-parse/sync";
import { createMoviesTable, insertMovie } from "../repositories";

const loadCsvData = async (): Promise<void> => {
  await createMoviesTable();

  const csvFilePath = path.join(__dirname, "..", "..", "data", "movielist.csv");

  try {
    const fileContent = await fs.readFile(csvFilePath, "utf-8");

    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
      delimiter: ";",
    });

    for (const row of records) {
      const isWinner = row.winner?.toLowerCase() === "yes";
      insertMovie(
        Number(row.year),
        row.title,
        row.studios,
        row.producers,
        isWinner
      );
    }
  } catch (error) {
    console.error("Error loading CSV data:", error);
    throw error;
  }
};

export default loadCsvData;
