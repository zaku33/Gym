const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Medicine = new Schema({
    code_medicine : String,
    name_medicine: String,
    price_medicine : Number,
    description_medicine: String,
    notice_medicine: String,
    etc :[]
})

module.exports = mongoose.model('Medicine',Medicine);