const {Schema, model} = require("mongoose");

const validateName = (name) =>  typeof name == 'string';
const validateMember = (members) =>  Array.isArray(members) && members.every(member => typeof member === 'string');

const familySchema = (collectionName) =>  new Schema({
    name: {
        type: String,
        required: [true, 'name is required!'],
        validate: {
            validator: validateName,
            message: props => `${props.value} is not of type string`
        }
    },
    members: {
        type: [String],
        required: [true, 'members is required!'],
        validate: {
            validator: validateMember,
            message: props => `${props.value} is not an array of type string`
        }
    }
},{collection: collectionName});

const familyModel = model("family", familySchema('families'));
const testModel = model("test", familySchema('tests'));

module.exports = {
    familyModel,
    testModel};

