const mongoose = require("mongoose")

const schema = new mongoose.Schema({
     fname : String,
     lname : String,
     age : Number, 
     contact  : Number,
     address : String,
})

const User = mongoose.model("info" , schema)

module.exports = User;