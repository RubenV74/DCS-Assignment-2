const mongoose = require("mongoose");
require("dotenv").config({path:"../../.env"});
const  {familyModel} = require("../Models/families.model");

class StorageConnection{
    constructor(model) {
        this.Model = model;
        this.connection();
    }

    connection(){
        mongoose.connect(process.env.MONGO_URI)
            .then(() => {console.log("Connect to Data Base")})
            .catch((error) => {console.error("Bad connection");})
    }

    find(){
        return this.Model.find({});
    }
}

const familiesStorage = new StorageConnection(familyModel);
familiesStorage.find().then((data)=> console.log(data));