const {familiesStorage} = require("../DB/MongoStorage/storageConnection");
const {Types} = require('mongoose');

// const getAllFamilies = (req, res) => {
//     const {families} = familiesRepo.getAllData();
//     res.status(200).json(families);
// }

const getAllFamilies = async (req, res, next) => {
    try {
        const families = await familiesStorage.find({});
        res.status(200).json(families);
    }
    catch (err){
        next(err);
    }
}

const getFamiliesByName = async (req, res, next) => {
    try {
        const name = req.params.name;
        if (!name) throw new Error("Name is NOT valid!");
        const families = await familiesStorage.find({name : name});
        res.status(200).json(families);
    }
    catch (err){
        next(err);
    }
}

const getFamiliesByMember = async (req, res, next) => {
    try {
        const member = req.params.member;
        if (!member) throw new Error("Member is NOT valid!");
        const families = await familiesStorage.find({members : member});
        res.status(200).json(families);
    }
    catch (err){
        next(err);
    }
}

const getFamilyById = async (req, res, next) => {
    try {
        const id = req.params.id;
        if (!id) throw new Error("ID is NOT valid!");
        const family = await familiesStorage.find({_id : new Types.ObjectId(id)});
        res.status(200).json(family);
    }
    catch (err){
        next(err);
    }
}


// const createFamily = (req, res) => {
//     const {body} = req;
//     familiesRepo.updateData(body);
//     res.status(200).send('Family saved to data');
// }

const createFamily = async (req, res, next) => {
    try {
        const {body} = req;
        if (!body.name || !body.members || !(body.members instanceof Array) || !(body.name instanceof String)){
            throw new Error("Create is NOT valid!");
        }
        await familiesStorage.insert(body);
        res.status(200).send('Family saved to data');
    }
    catch (err){
        next(err);
    }
}


// const editFamily = (req, res) => {
//     const {body} = req;
//     const {families} = familiesRepo.getAllData();
//     const updatedFamilies = families.map((family) => {
//         if (family.id === body.id)
//             return {...family, ...body};
//         else return family;
//     });
//     familiesRepo.updateAllData(updatedFamilies);
//     res.status(200).send('Family updated to data');
// }

const editFamily = async (req, res, next) => {
    try {
        const {query, data} = req.body;
        if (!query || !data) {
            throw new Error("Edit is NOT valid!");
        }
        await familiesStorage.update(query, data);
        res.status(200).send('Family updated to data');
    }
    catch (err){
        next(err);
    }
}


// const deleteFamily = (req, res) => {
//     const {id} = req.body;
//     const {families} = familiesRepo.getAllData();
//     const updatedFamilies = families.filter((family) => family.id !== id);
//     familiesRepo.updateAllData(updatedFamilies);
//     res.status(200).send('Family Deleted from data');
// }

const deleteFamily = async (req, res, next) => {
    try {
        const {id} = req.body;
        if (!id || !Types.ObjectId.isValid(id)) {
            throw new Error("Delete is NOT valid!");
        }
        await familiesStorage.remove(id);
        res.status(200).send('Family Deleted from data');
    }
    catch (err){
        next(err);
    }
}


module.exports = {
    getAllFamilies,
    getFamiliesByName,
    getFamiliesByMember,
    getFamilyById,
    createFamily,
    editFamily,
    deleteFamily
}