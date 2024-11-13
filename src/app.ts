import express from "express";
import awardRoutes from "./routes/award-routes";

const app = express();

app.use("/api", awardRoutes);

export default app;
