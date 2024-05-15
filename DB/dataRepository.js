const {EventEmitter} = require("events");
const fs = require("fs");   // read and to directorys
const Path = require("path");

const dataRepos ={
    families: "./data.json"

}
class DataRepository extends EventEmitter{
    mainEntry;
    constructor(dataToConnect) {
        super();
        this.mainEntry = dataToConnect;

        this.connectToStorage(dataToConnect);
        this.on("updateData", () => {
            fs.writeFile(Path.join(__dirname, dataRepos[dataToConnect]), JSON.stringify(this.data), 'utf8', err => {
                if (err)
                    throw err;
                console.log("File has been saved");
            });
        });
    }
    connectToStorage(dataToConnect){
        this.setData(require(`${dataRepos[dataToConnect]}`))
    }
    setData(data){
        this.data = data;
    }
    updateData(payload){
        const newData = {};
        newData[this.mainEntry] = [...this.data[this.mainEntry], payload];
        this.setData(newData);
        this.emit("updateData");
    }
    getAllData(){
        return this.data;
    }
}

module.exports = { familiesRepo : new DataRepository("families")};
