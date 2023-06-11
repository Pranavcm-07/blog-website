const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

require('dotenv').config({path: __dirname+'/.env'})
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))



app.get('/',(req,res) => {
    res.sendFile(__dirname+'/index.html')
})
app.get('/page',(req,res) => {
    res.sendFile(__dirname+'/page.html')
})












app.listen(3000,() => {
    console.log('server running on port 3000')
})