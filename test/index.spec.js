const { TestWatcher } = require("jest");
const request = require("supertest");
const app = require("../src/app.js");

describe("POST /entities/filter" , ()=>{

    test("should response status 400 if not data send", async ()=> {
        const response = await request(app).post("/entities/filter").send();
        expect(response.statusCode).toBe(400);

    });

    test("should response status 200 ", async ()=> {
        const response = await request(app).post("/entities/filter").send({startId:1,endId:2});
        expect(response.statusCode).toBe(200);
    });

    
    test("should response status 200 and a entity data", async ()=> {
        const response = await request(app).post("/entities/filter").send({startId:1,endId:3});
        expect(response.body.entity).toBeInstanceOf(Array)
    });




});

