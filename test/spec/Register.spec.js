const request = require("supertest");
const { expect } = require("chai");

describe('Login Feature', () => {
    it('Success Login', async () => {
        const response = await request("https://kasir-api.belajarqa.com")
        .post("/registration")
        .send({
            "name": "Toko Roti",
            "email": "rotiella@gmail.com",
            "password": "@1234567e",
        })
        console.log((await response).status);
        console.log((await response).body);

        //ASSERTION
        expect((await response).status).to.equal(201);
    })
})