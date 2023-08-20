const request = require("supertest");
const config = require('../../data/config.json');

let CategoryId= 0;

//DELETE CATEGORY FUNCTION
async function dltCategory(Categoryid,token){
    if(Categoryid==false){
       const CategoryIdnull=0;
        const response = await request(config.BASEURL)
    .del(`/categories/${CategoryIdnull}`)
    .set("Authorization", `Bearer ${token}`)
    return response
    }else{
    const response = await request(config.BASEURL)
    .del(`/categories/${Categoryid}`)
    .set("Authorization", `Bearer ${token}`)
    return response}
}

module.exports = {dltCategory}