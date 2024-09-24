const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose")

const User = require("./models/user");

mongoose.connect('mongodb://localhost:27017/tvShowApp')
    .then(() => {
        console.log("Mongoose Connection Open")
    })
    .catch(e =>{
        console.log("Mongoose Connection Error")
        console.log(e)
    });


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "public/views"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render("homePage") 
})

app.get('/home', (req, res) => {
    res.redirect("/")
})

// app.get('/createPage', (req, res) => {
//     res.render("createPage")
// })

// app.get('/loginPage', (req, res) => {
//     res.render("loginPage")
// })

// app.post('/createPage', (req, res) => {
//     console.log(req.body)
//     res.send("creating")
// })

// app.post('/loginPage', (req, res) => {
//     console.log(req.body)
//     res.send("logining")
// })

// app.get('/createPage/*', (req, res) => {
//     res.redirect("/404")
// })

// app.get('/loginPage/*', (req, res) => {
//     res.redirect("/404")
// })

app.get('/404', (req, res) => {
    res.render("notFound")
})

app.get('/*', (req, res) => {
    res.redirect("/404")
})

app.listen(3000, ()=>{
    console.log("PORT3000")
})

module.exports = app;