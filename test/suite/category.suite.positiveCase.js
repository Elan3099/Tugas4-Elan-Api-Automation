const { expect } = require("chai");
const { addCategory } = require("../spec/01_AddCategory");
const { getToken } = require("../spec/user.getToken");
const { getCategory } = require("../spec/02_GetCategory");
const { updCategory } = require("../spec/03_UpdateCategory");
const { dltCategory } = require("../spec/04_DeleteCategory");

// ADD CATEGORY FEATURE | TC 01
describe('Success Add Category Feature', () => {

    // TC 0101 
    it('TCO101_Add Category_PositiveCase : Correct Input data => Status code 201 | Status Response : Success => "Category berhasil ditambahkan"', async () => {
    const token = await getToken()
    const payload = {
    "name": "Roti coklat",
   "description": "makanan ringan dari indonesia"
}
    const response = await addCategory(payload,token)
    console.log("Actual response code : "+(await response).status);
    console.log("Actual status : "+(await response.body.status));
    expect((await response).status).to.equal(201);
    CategoryId = (await response).body.data.categoryId;
    
    })    
})

// GET CATEGORY DETAIL FEATURE | TC 02
describe('Success Get Category Detail Feature', () => {

    //TC 0201
    it('TC0201_Get Category Detail_PositiveCase : Correct Input data Category Id => Status code 200 | Status Response : Success', async () => {
const token = await getToken()
const Categoryid = CategoryId
const response = await getCategory(Categoryid,token)
console.log("Actual response code : "+(await response).status);
console.log("Actual status : "+(await response.body.status));
expect((await response.body.status)).to.equal("success");
expect((await response).status).to.equal(200);

            })
})

// UPDATE CATEGORY | TC 03
describe('Success Update Category Feature', () => {

    //TC 0301
    it('TC0301_Update Category Feature_PositiveCase : Correct Input data Category Id, name, description => Status code 200 | Status Response : Success', async () => {
const token = await getToken()
const Categoryid = CategoryId
const payload = {
    "name": "Roti Strawberry",
    "description": "Rasa Strawberry"
}
const response = await updCategory(Categoryid,token,payload)
console.log("Actual response code : "+(await response).status);
console.log("Actual status : "+(await response.body.status));
expect((await response.body.status)).to.equal("success");
expect((await response).status).to.equal(200);

    })
})


// DELETE CATEGORY DETAIL FEATURE | TC 04
describe('Success Delete Category Detail Feature', () => {

    //TC 0401
    it('TC0401_Delete Category Detail_PositiveCase : Correct Input data Category Id => Status code 200 | Status Response : Success', async () => {
const token = await getToken()
const Categoryid = CategoryId
const response = await dltCategory(Categoryid,token)
console.log("Actual response code : "+(await response).status);
console.log("Actual status : "+(await response.body.status));
expect((await response.body.status)).to.equal("success");
expect((await response).status).to.equal(200);

    })

})


