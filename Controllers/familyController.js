const {familiesStorage} = require("../DB/MongoStorage/storageConnection");
const {Types} = require('mongoose');

// const getAllFamilies = (req, res) => {
//     const {families} = familiesRepo.getAllData();
//     res.status(200).json(families);
// }

const getAllFamilies = async (req, res) => {
    const families = await familiesStorage.find({});
    res.status(200).json(families);
}

const getFamiliesByName = async (req, res) => {
    const name = req.params.name;
    const families = await familiesStorage.find({name : name});
    res.status(200).json(families);
}

const getFamiliesByMember = async (req, res) => {
    const member = req.params.member;
    const families = await familiesStorage.find({members : member});
    res.status(200).json(families);
}

const getFamilyById = async (req, res) => {
    const id = req.params.id;
    const family = await familiesStorage.find({_id : new Types.ObjectId(id)});
    res.status(200).json(family);
}


// const createFamily = (req, res) => {
//     const {body} = req;
//     familiesRepo.updateData(body);
//     res.status(200).send('Family saved to data');
// }

const createFamily = async (req, res) => {
    const {body} = req;
    await familiesStorage.insert(body);
    res.status(200).send('Family saved to data');
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

const editFamily = async (req, res) => {
    const {query, data} = req.body;
    await familiesStorage.update(query, data);
    res.status(200).send('Family updated to data');
}


// const deleteFamily = (req, res) => {
//     const {id} = req.body;
//     const {families} = familiesRepo.getAllData();
//     const updatedFamilies = families.filter((family) => family.id !== id);
//     familiesRepo.updateAllData(updatedFamilies);
//     res.status(200).send('Family Deleted from data');
// }

const deleteFamily = async (req, res) => {
    const {id} = req.body;
    await familiesStorage.remove(id);
    res.status(200).send('Family Deleted from data');
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