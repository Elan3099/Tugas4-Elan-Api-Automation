const request = require("supertest");
const config = require('../../data/config.json');

let CategoryId= 0;

//GET DETAIL CATEGORY FUNCTION
async function getCategory(Categoryid,token){
    if(Categoryid==false){
       const CategoryIdnull=0;
        const response = await request(config.BASEURL)
    .get(`/categories/${CategoryIdnull}`)
    .set("Authorization", `Bearer ${token}`)
    return response
    }else{
    const response = await request(config.BASEURL)
    .get(`/categories/${Categoryid}`)
    .set("Authorization", `Bearer ${token}`)
    return response}
}

module.exports = {getCategory}