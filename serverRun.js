const express = require("express");
const app = express();
const path = require("path");


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "public/views"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render("homePage")
})

app.get('/createPage', (req, res) => {
    res.render("createPage")
})

app.get('/loginPage', (req, res) => {
    res.render("loginPage")
})

app.post('/createPage', (req, res) => {
    console.log(req.body)
    res.send("creating")
})

app.post('/loginPage', (req, res) => {
    console.log(req.body)
    res.send("logining")
})


app.listen(8000, ()=>{
    console.log("listening")
})

module.exports = app;