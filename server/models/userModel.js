const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname:String,
  email:String,
  password:String,
  address:String,
});

module.exports = mongoose.model("user",userSchema );
