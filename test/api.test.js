const request = require("supertest");

const app = require("../src/app");

describe("GET /api/v1", () => {
    it("responds with a json message", (done) => {
        request(app)
            .get("/api/v1")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(
                200,
                {
                    message: "API - OAuth2 Service 👋🌎🌍🌏",
                },
                done
            );
    });
});

describe("GET /api/v1/oauth/discord", () => {
    it("responds with redirect to discord OAuth2", (done) => {
        request(app)
            .get("/api/v1/oauth/discord")
            .set("Accept", "application/json")
            .expect(302, done);
    }, 15000);
});
