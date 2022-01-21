const mongoose = require("mongoose");

const express = require("express");

const app = express()

require("./db/connect")

app.use(express.json())


const User = require("./models/model")


const Post = require("./models/uservalidation");

const info = require("./models/model")

const { findById, findByIdAndUpdate } = require("./models/model");

const uservalidation = require("./models/uservalidation");
const res = require("express/lib/response");

/** 
   @desc create user
   @param {fname , lname , age , contact , address}
   @method POST
   @url "/user"
*/
app.post("/user", async (req, res) => {
    const user = new User(req.body);
    user.save().then(() => {
        res.send(user)
    })
        .catch((e) => {
            res.send(e)
        })

})

app.post("/post" , async (req,res) => {
    const postBody = new Post(req.body);
    postBody.save().then((result) =>{
        res.send(result)
    })
    .catch((e) => {
        res.send(e)
    })
})

app.get("/post", async (req, res) => {
    try {
        const result = await Post.find({})
        res.send(result)
    }
    catch (err) {
        res.send(err)
    }
})

app.get("/user/:id", async (req, res) => {
    try {
        const result = await User.findById({ _id: req.params.id}, req.body )
        res.send(result)
    } catch (error) {
        res.send(error)
    }
})

app.patch("/user/:id", async (req, res) => {
    try {
        const result = await User.findByIdAndUpdate({ _id: req.params.id }, req.body, {new: true})
        res.send(result)
    } catch (error) {
        res.send(error)
    }
})

app.put("/user/:id" , async(req,res) => {
    console.log(req.body, req.params.id);
       try {
        const result = await User.findByIdAndUpdate({_id : req.params.id} , req.body, {new: true} )
        res.send(result)
       } catch (error) {
           res.send(error)
           
       }
})

app.delete("/post/:id", async (req, res) => {
    try {
        const result = await Post.deleteOne({ _id: req.params.id }, req.body)
        res.send(result)
    } catch (error) {
        res.send(error)

    }
})

app.listen(4000, () => {
    console.log("http://127.0.0.1:4000")

})


