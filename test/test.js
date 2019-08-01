var request = require("supertest");
var app = require("../index.js");

describe("GET /", function() {
    it("respond with Hello Jenkins", function(done) {
        request(app).get("/").expect("Hello Jenkins", done);
    });
});

describe('POST /suma', function () {
    it('/suma responds with 200', function (done) {
        request(app).post('/suma').send({ "num1": 2.5, "num2": 2.5 }).expect(200, done);
    });
});
  