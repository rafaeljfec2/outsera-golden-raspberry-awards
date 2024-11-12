import express from "express";
import getProducerIntervals from "../controllers/award-controller";

const router = express.Router();
router.get("/awards/producer-intervals", getProducerIntervals);

export default router;
