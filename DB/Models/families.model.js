const {Schema, model} = require("mongoose");

const familySchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required!'],
        validate: {
            validator: (name) =>  typeof name == 'string',
            message: props => `${props.value} is not of type string`
        }
    },
    members: {
        type: [String],
        validate: {
            validator: (members) =>  Array.isArray(members) && members.every(member => typeof member === 'string'),
            message: props => `${props.value} is not an array of type string`
        },
        required: [true, 'members is required!']
    }
},{collection:"families"});

const familyModel = model("family", familySchema);

module.exports = {familyModel};

