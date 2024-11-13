import fs from "fs";
import path from "path";

export function checkFileExists(filename: string): void {
  const filePath = path.join(__dirname, "..", "..", "data", filename);
  if (!fs.existsSync(filePath)) {
    console.error(
      `Error: The file ${filename} is missing in the data directory.`
    );
    process.exit(1);
  }
}
