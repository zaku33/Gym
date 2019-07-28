const fs = require('fs');
const path = require('path')


function convertStringToVariable(object) {
    let data = []
    for ([key, value] of Object.entries(object)) {
        data.push(`${key}: ${value}`)
    }
    return data
}
module.exports = {
    CreateModel: (req, res) => {
        let modelName = req.body.modelName;
        let data = JSON.stringify(req.body.data);
        let obj = JSON.parse(data);
        let object =
            `const mongoose = require("mongoose")
            const Schema = mongoose.Schema
            var ${modelName}Schema = new Schema({
                ${convertStringToVariable(obj)}
            })
            var ${modelName} = mongoose.model("${modelName}", ${modelName}Schema);
            module.exports = ${modelName};
            `
        let folder = path.join(__dirname, '../models/');

        fs.writeFile(`${folder}/${modelName}.model.js`, object, err => {
            if (err) throw err;
            res.send('The file has been saved!');
        })
    }
}