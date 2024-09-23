const mongoose = require("mongoose")
const User = require("./models/user")

mongoose.connect('mongodb://localhost:27017/tvShowApp')
    .then(() => {
        console.log("Mongoose Connection Open")
    })
    .catch(e =>{
        console.log("Mongoose Connection Error")
        console.log(e)
    });

const u = new User({
    username: "test",
    password: "test",
    watchlist: []
})

u.save()
    .then(u =>{
        console.log(u)
    }).catch(e =>{
        console.log(e)
    })
