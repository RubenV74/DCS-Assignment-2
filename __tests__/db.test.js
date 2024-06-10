const { expect, describe, test, afterEach} = require("@jest/globals");
const { familiesStorage } = require("../DB/MongoStorage/storageConnection");
const {connection,disconnect} = require("mongoose");
require("dotenv").config();

describe('StorageConnection connection test', () => {
    afterEach(async () => await disconnect());

    test('should connect to the database successfully', async () => {
        await familiesStorage.connection(process.env.MONGO_URI)
        expect(connection.readyState === 1 || connection.readyState === 2).toBeTruthy()
    });
    test('should get error', async () => {
        try {
            await familiesStorage.connection('some invalid URI')
        }catch (error){
            expect(connection.readyState).toBe(0);
            expect(error).toBeInstanceOf(Error);
        }
    });
});

