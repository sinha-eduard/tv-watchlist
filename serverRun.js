const express = require("express")
const app = express()
const path = require("path")


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "public/views"))
app.use(express.static(__dirname + "/public"))


app.get('/', (req, res) => {
    res.render("homePage")
})

app.get('/create', (req, res) => {
    res.render("loginPage", {type: "create"})
})

app.get('/login', (req, res) => {
    res.render("loginPage", {type: "login"})
})



app.listen(8000, ()=>{
    console.log("listening")
})