import server from "../../src/server";
import request from "supertest";

// close the server after each test
afterEach((done) => {
  server.close();
  done();
});

describe("routes/healthcheck", () => {
  it("should pong", async () => {
    const response = await request(server).get("/getUser");
    console.log('====================================');
    console.log('====================================');
    console.log("ttt",response.status);
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body.data).toEqual("pong");
  });
})