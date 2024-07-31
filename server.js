const express = require('express');
const colors = require("colors");
const dotenv = require("dotenv").config()
const morgan = require("morgan")
const app = express()
const userdata = require("./utility/userdata.json")
const fileURLtoPath=require("url");
const path= require("path");
const PORT = 5000;


app.use(express.json())
// static file vala middleware
app.use(express.static(path.resolve(__dirname, "./public")))

app.get("/userdata", (req,res)=>{
    res.send(userdata)
})

app.get("/home", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./public", "index.html"))
})

app.get("/weather", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./public", "weather-1.html"))
})
app.get("/contact", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./public", "contact.html"))
})


app.listen(PORT, ()=>{
    console.log(`server is listening on ${PORT}`.green)
})