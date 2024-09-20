const express = require("express")
const app = express()
const path = require("path")


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "public/views"))
app.use(express.static(__dirname + "/public"))


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
    res.send("creating")
})

app.post('/loginPage', (req, res) => {
    res.send("logining")
})


app.listen(8000, ()=>{
    console.log("listening")
})

module.exports = app;