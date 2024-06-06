const express = require("express");
const app = express();
const logger = require("./Logger/logger");

const {familyRouter} = require("./Routers/familyRouter");
const {info} = require("winston");

app.use(express.json());

app.use("/api/families", familyRouter);

app.use((err, req, res, next) => {
    logger.error('ERROR',err.message);
    res.status(500).send(err.message);
});

app.use((req,res)=>{res.status(400).send('<h1>404</h1><span>Page Not Found!</span>')});
app.listen(3000, ()=> logger.info('connect', 'express is running on port  3000'));
