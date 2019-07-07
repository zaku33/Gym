const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var Post_Schema = new Schema({
    Title: {type:String,required:true},
    Author: {type:String,required:true},
    DateSubmit: {type:Date,required:true},
    Content: String,
    
})