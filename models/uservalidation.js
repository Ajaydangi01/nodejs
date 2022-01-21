const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, "Please enter first name"]
    },
    lname: {
        type: String,
        required: [true, "Please enter last name"]
    },
    email: {
        type: String,
        required: [true, "Please enter email"]
    },
    number: {
        type: Number,
        required: [true, "Please enter contact number"],
        minlength: [10, "please enter valid number"],
        maxlength: [10, "please enter valid number"]
    },

    dateOfBirth: {
        type: String,
        required: [true, "Please enter date of birth"]
    },
    country: {
        type: String,
        required: [true, "Please enter country"]
    },
    address: {
        type: String,
        required: [true, "Please enter address"]
    },
    password: {
        type: String,
        required: [true, "Please enter password"]
    },
    confirmPassword: {
        type: String,
        required: [true, "Please enter confirm password"]
    }

})

// console.log(PostSchema)
const Post = mongoose.model('Post', PostSchema);

module.exports = Post;