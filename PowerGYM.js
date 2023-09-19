const express = require("express")
const path = require("path")
const fs = require("fs")
const app = express()
var mongoose = require("mongoose")
const bodyparser = require("body-parser")
mongoose.connect("mongodb://localhost/conatctPowerGYM", {
    useNewUrlParser: true
})
const port = 80

var contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String
  });
  
  const Contact = mongoose.model('Contact', contactSchema);  

app.use("/assets", express.static("assets"))
app.use(express.urlencoded())

app.set("view engine", "html")
app.set("Gymstyle", path.join(__dirname, "Gymstyle"))

app.get("/", (req, res) => {
    const put = {}
    res.status(200).sendFile(path.join(__dirname,"PowerGYM.html"))
})

app.get("/Services.html", (req, res) => {
    const put = {}
    res.status(200).sendFile(path.join(__dirname,"Services.html"))
})

app.get("/ContactUs.html", (req, res) => {
  const put = {}
  res.status(200).sendFile(path.join(__dirname,"ContactUs.html"))
})

app.get("/About.html", (req, res) => {
  const put = {}
  res.status(200).sendFile(path.join(__dirname,"About.html"))
})
 
app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`)
})