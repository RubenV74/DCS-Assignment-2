const {Schema, model} = require("mongoose");

const familySchema = new Schema({
    name:String,
    members: [String]
},{collection:"families"});

const familyModel = model("family", familySchema);

module.exports = {familyModel};

