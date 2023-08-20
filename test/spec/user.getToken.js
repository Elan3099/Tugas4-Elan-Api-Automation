const request = require("supertest");
const userData = require('../../data/user.json')
const config = require('../../data/config.json')


//function for get token
async function getToken(){
    const response = await request(config.BASEURL)
    .post("/authentications")
    .send(userData)
    const token = await response.body.data.accessToken
    return token
}

module.exports = {getToken}