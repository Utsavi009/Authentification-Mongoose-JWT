const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  login : {
    type : String,
    required : true
  },
  password : {
    type : String,
    required : true
  }
});

module.exports = mongoose.model("User", User);
