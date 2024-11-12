import express from "express";
import { loadCsvData } from "./services/load-csv-data";
import awardRoutes from "./routes/award-routes";

const app = express();

loadCsvData()
  .then(() => {
    console.log("Data loaded.");
  })
  .catch((err) => {
    console.error("Error loading:", err);
  });

app.use("/api", awardRoutes);

export default app;
