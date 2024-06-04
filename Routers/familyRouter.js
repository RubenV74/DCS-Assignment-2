const {Router}= require("express");
const familyController = require('../Controllers/familyController');

const familyRouter = new Router();

familyRouter.get("/", familyController.getAllFamilies);
familyRouter.get("/name/:name", familyController.getFamiliesByName);
familyRouter.get("/member/:member", familyController.getFamiliesByMember);
familyRouter.get("/id/:id", familyController.getFamilyById);
familyRouter.post("/", familyController.createFamily);
familyRouter.put("/", familyController.editFamily);
familyRouter.delete("/", familyController.deleteFamily);


module.exports={
    familyRouter
};