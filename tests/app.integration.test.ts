import request from "supertest";
import app from "../src/app";
import { AwardIntervalsResponse } from "../src/types";

describe("Integration Test - GET /awards/producer-intervals", () => {
  it("deve retornar os intervalos corretos de prêmios para os produtores", async () => {
    const expectedResponse: AwardIntervalsResponse = {
      min: [
        {
          producers: "Bo Derek",
          interval: 6,
          previousWin: 1984,
          followingWin: 1990,
        },
      ],
      max: [
        {
          producers: "Bo Derek",
          interval: 6,
          previousWin: 1984,
          followingWin: 1990,
        },
      ],
    };

    const res = await request(app).get("/api/awards/producer-intervals");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("min");
    expect(res.body).toHaveProperty("max");

    // Verifique que os dados de `min` e `max` retornados correspondem exatamente ao esperado
    expect(res.body).toEqual(expectedResponse);
  });
});
