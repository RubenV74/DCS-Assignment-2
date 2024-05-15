const express = require("express");
const app = express();

const {familyRouter} = require("./Routers/familyRouter");
app.use(express.json());
app.use("/", familyRouter);
app.use((req,res)=>{res.status(400).send("Something is broken!")});
app.listen(3000, ()=> console.log("experss is runing on port  3000"));
