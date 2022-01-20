const mongoose  = require("mongoose")

const schema = new mongoose.model({
    fname : {
       type : String,
       required: true,
       unique : true,
       minlength:[3 , "minimum 3 letters"],
       maxlength :20
    },
    lname : {
        type : String,
        required : true,
        minlength :[3 , "minimum 3 letters"],
        maxlength:20
    },
    age :{
        type : Number,
        required:true,
        minlength:[1 , "minimum 1 character"],
        maxlength:3,

    },
    number : {
        type : Number,
        required :true,
        unique : true,
        minlength:[10 , "minimum 10 character"],
        maxlength :10
    },
    address : {
        required:true,
        minlength:[10 , "minimum 10 letters"],
        maxlength :50
    }

})