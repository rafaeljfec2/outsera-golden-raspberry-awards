import { Request, Response } from "express";
import getProducerIntervals from "../services/award-service";

const getProducerIntervalsController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await getProducerIntervals();
    res.json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao obter intervalos de prêmios", error });
  }
};

export default getProducerIntervalsController;
