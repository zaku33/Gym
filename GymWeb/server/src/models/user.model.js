const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var Users_Schema = new Schema({
  username: String,
  password: String,
  email: String,
  access_token: String,
  nickname: {
    type: String,
    required: true
  },
  birthday: Date,
  joinDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  avatar: {
    type: Schema.Types.ObjectId,
    ref: "Image",
    default: null
  },
  phone: String,
  address: String
  // roles: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Role'
  // }]
});
var Users = mongoose.model("User", Users_Schema);

module.exports = Users;