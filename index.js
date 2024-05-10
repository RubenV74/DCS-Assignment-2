const express = require("express");
const app = express();
app.use((req ,res)=>{
   res.status(200).send("hello word")
});
app.listen(3000, ()=> console.log("experss is runing on port  3000"));
