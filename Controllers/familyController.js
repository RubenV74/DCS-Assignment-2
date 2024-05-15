const {familiesRepo} = require("../DB/dataRepository");

const getAllFamilies = (req, res) => {
    const {families} = familiesRepo.getAllData();
    res.status(200).json(families);
}

const createFamily = (req, res) => {
    const {body} = req;
    familiesRepo.updateData(body);
    res.status(200).send('Family saved to data');
}

const editFamily = (req, res) => {
    const {body} = req;
    const {families} = familiesRepo.getAllData();
    const updatedFamilies = families.map((family) => {
        if (family.id === body.id)
            return {...family, ...body};
        else return family;
    });
    familiesRepo.updateAllData(updatedFamilies);
    res.status(200).send('Family updated to data');
}

const deleteFamily = (req, res) => {
    const {id} = req.body;
    const {families} = familiesRepo.getAllData();
    const updatedFamilies = families.filter((family) => family.id !== id);
    familiesRepo.updateAllData(updatedFamilies);
    res.status(200).send('Family Deleted from data');
}

module.exports = {
    getAllFamilies,
    createFamily,
    editFamily,
    deleteFamily
}