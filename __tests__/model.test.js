const { expect, describe, test, afterEach, beforeEach} = require("@jest/globals");
const {testModel} = require('../DB/Models/families.model')
const mongoose = require('mongoose');
const {log} = require("winston");
require('dotenv').config()

describe('Family model testing', ()=>{
    beforeEach(()=> mongoose.connect(process.env.MONGO_URI))
    afterEach(()=> mongoose.disconnect())

    test('Get all families', async () => {
        const testFind = await testModel.find({}).exec();
        expect(Array.isArray(testFind)).toBeTruthy();
        testFind.forEach((obj)=>{
                expect(obj.hasOwnProperty('name')).toBeTruthy();
                expect(obj.hasOwnProperty('members')).toBeTruthy();
                expect(Array.isArray(obj.members)).toBeTruthy();

            })
    });

})

