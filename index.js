const express = require("express");
const app = express();

const {familyRouter} = require("./Routers/familyRouter");
app.use(express.json());

app.use("/api/families", familyRouter);
app.use((req,res)=>{res.status(400).send('<h1>404</h1><span>Page Not Found!</span>')});
app.listen(3000, ()=> console.log("experss is runing on port  3000"));
