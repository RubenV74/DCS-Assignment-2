const mongoose = require("mongoose");
require("dotenv").config();
const  {familyModel} = require("../Models/families.model");

class StorageConnection{
    constructor(model) {
        this.Model = model;
        this.connection();
    }

    connection(){
        mongoose.connect(process.env.MONGO_URI)
            .then(() => {console.log("Connect to Data Base")})
            .catch((error) => {console.error("Bad connection", error);})
    }

    async find(query){
        return await this.Model.find(query);
    }

    async insert(data){
        return await this.Model.insertMany(data, {validateBeforeSave: true });
    }

    async remove(id){ // name = { name : "example"}
       return await this.Model.findByIdAndDelete(id);
    }

    async update(data, updateData){
        return await this.Model.updateMany(data,updateData ,{runValidators: true});
    }
}

module.exports = {
     familiesStorage : new StorageConnection(familyModel)
}
