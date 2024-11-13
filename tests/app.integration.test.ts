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
          producers: "Joel Silver",
          interval: 1,
          previousWin: 1990,
          followingWin: 1991,
        },
      ],
      max: [
        {
          producers: "Matthew Vaughn",
          interval: 13,
          previousWin: 2002,
          followingWin: 2015,
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
