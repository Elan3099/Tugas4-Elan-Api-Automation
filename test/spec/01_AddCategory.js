const request = require("supertest");
const config = require('../../data/config.json');

let CategoryId= 0;

//ADD CATEGORY FUNCTION
async function addCategory(payload,token){
    const response = await request(config.BASEURL)
    .post('/categories')
    .send(payload)
    .set("Authorization", `Bearer ${token}`)
    return response
}

module.exports = {addCategory}
