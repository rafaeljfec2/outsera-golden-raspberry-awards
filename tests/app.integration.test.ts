import request from "supertest";
import app from "../src/app";
import loadCsvData from "../src/services/load-csv-data";
import { AwardIntervalsResponse } from "../src/types";

beforeAll(async () => {
  await loadCsvData();
});

describe("Integration Test - GET /awards/producer-intervals", () => {
  it("should return the correct award intervals for producers", async () => {
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
    expect(res.body).toEqual(expectedResponse);
  });
});
