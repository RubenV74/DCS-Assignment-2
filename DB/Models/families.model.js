const {Schema, model} = require("mongoose");

const familySchema = new Schema({
    id:Number,
    name:String,
    members: [String]
},{collection:"families"});
const familyModel = model("family", familySchema);

module.exports = {familyModel};

