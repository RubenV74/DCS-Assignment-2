const {Router}= require("express");
const familyRouter = new Router();
const {familiesRepo}= require('../DB/dataRepository')
familyRouter.get("/", (req ,res)=>{
    res.status(200).json(familiesRepo.getAllData());
})

module.exports={
    familyRouter
};