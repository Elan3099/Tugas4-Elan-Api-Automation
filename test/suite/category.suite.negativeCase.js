const { expect } = require("chai");
const { addCategory } = require("../spec/01_AddCategory");
const { getToken } = require("../spec/user.getToken");
const { getCategory } = require("../spec/02_GetCategory");
const { updCategory } = require("../spec/03_UpdateCategory");
const { dltCategory } = require("../spec/04_DeleteCategory");


// ADD CATEGORY FEATURE | TC 01
describe('Failed Add Category Feature', () => {

    // TC 0102
    it('TCO2__Add Category_NegativeCase : Incorrect Input data => Status code not 400 | Status Response : Failed => "Category gagal ditambahkan"', async () => {
    const token = await getToken()
    const payload = {
    "name": "",
    "description": ""
        }
    const response = await addCategory(payload,token)
    console.log("Actual response code : "+(await response).status);
    console.log("Actual status : "+(await response.body.status));
    expect((await response.body.status)).to.equal("fail");
    expect((await response).status).to.equal(400);

            })        
})


// GET CATEGORY DETAIL FEATURE | TC 02
describe('Failed  Get Category Detail Feature', () => {
    //TC 0202
    it('TC0202_Get Category Detail_NegativeCase : Incorrect Input data Category Id => Status code 404 | Status Response : Fail', async () => {
        const token = await getToken()
        const Categoryid = 0
        const response = await getCategory(Categoryid,token)
        console.log("Actual response code : "+(await response).status);
        console.log("Actual status : "+(await response.body.status));
        expect((await response.body.status)).to.equal("fail");
        expect((await response).status).to.equal(404);
;
            })
})


// UPDATE CATEGORY | TC 03
describe('Failed  Update Category Feature', () => {
    //TC 0302
    it('TC0302_Update Category Feature_NegativeCase : Incorrect Input data Category Id=> Status code 400 | Status Response : Fail', async () => {
        const token = await getToken()
        const Categoryid = 0
        const payload = {
            "name": "Roti Strawberry",
            "description": "Rasa Strawberry"
        }
        const response = await updCategory(Categoryid,token,payload)
        console.log("Actual response code : "+(await response).status);
        console.log("Actual status : "+(await response.body.status));
        expect((await response.body.status)).to.equal("fail");
        expect((await response).status).to.equal(404);

            })
})



// DELETE CATEGORY DETAIL FEATURE | TC 04
describe('Failed  Delete Category Detail Feature', () => {
    //TC 0402
    it('TC0402_Delete Category Detail_NegativeCase : Incorrect Input data Category Id => Status code 404 | Status Response : Fail', async () => {
        const token = await getToken()
        const Categoryid = 0
        const response = await dltCategory(Categoryid,token)
        console.log("Actual response code : "+(await response).status);
        console.log("Actual status : "+(await response.body.status));
        expect((await response.body.status)).to.equal("fail");
        expect((await response).status).to.equal(404);

            })
})