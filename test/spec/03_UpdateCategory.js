const request = require("supertest");
const config = require('../../data/config.json');

let CategoryId= 0;

//UPDATE CATEGORY FUNCTION
async function updCategory(Categoryid,token,payload){
    if(Categoryid==false){
       const CategoryIdnull=0;
        const response = await request(config.BASEURL)
    .put(`/categories/${CategoryIdnull}`)
    .send(payload)
    .set("Authorization", `Bearer ${token}`)
    return response
    }else{
    const response = await request(config.BASEURL)
    .put(`/categories/${Categoryid}`)
    .send(payload)
    .set("Authorization", `Bearer ${token}`)
    return response}
}

module.exports = {updCategory}