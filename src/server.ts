import app from "./app";
import { checkFileExists } from "./utils/file-checker";

checkFileExists("movielist.csv");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
