const mongoose = require("mongoose");
require("dotenv").config();
const  {familyModel} = require("../Models/families.model");
const logger = require("../../Logger/logger");

class StorageConnection{
    constructor(model) {
        this.Model = model;
        this.connection();
    }

    async connection(mongoURI = process.env.MONGO_URI){
       return await mongoose.connect(mongoURI)
            .then(() => {logger.info("connect","Connect to Data Base")})
            .catch((error) => {logger.error("ERROR",`Bad Connection: ${error}`);})
    }

    async find(query){
        return await this.Model.find(query);
    }

    async insert(data){
        return await this.Model.create(data);
    }

    async remove(id){ // name = { name : "example"}
       return await this.Model.findByIdAndDelete(id);
    }

    async update(data, updateData){
        return await this.Model.updateMany(data,updateData);
    }
}

module.exports = {
    familiesStorage : new StorageConnection(familyModel)
}
