const {Router}= require("express");
const familyController = require('../Controllers/familyController');

const familyRouter = new Router();

familyRouter.get("/", familyController.getAllFamilies);
familyRouter.post("/", familyController.createFamily);
familyRouter.put("/", familyController.editFamily);
familyRouter.delete("/", familyController.deleteFamily);


module.exports={
    familyRouter
};