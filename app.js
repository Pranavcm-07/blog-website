const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const app = express()

require('dotenv').config({path: __dirname+'/.env'})
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('view engine','ejs')


mongoose.connect('mongodb+srv://pranav:'+process.env.ATLAS_CONNECTION_PASSWORD+'@cluster0.tcjcqt6.mongodb.net/blogDB',{useNewUrlParser:true,useUnifiedTopology: true}).then(() => {
    console.log('connected to database')
}).catch((err) => {
    console.log(err)
})

const articleSchema = mongoose.Schema({
    image: String,
    genre: String,
    title: String,
    summary: String,
    fullcontent: String
})

const Article = mongoose.model('article',articleSchema)

const article = new Article({
    image:'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltee886584fd1cd345/60db8718892a730f5883a347/68a712aa7ffd3da7d91c2fe1469bda58990f7ab7.jpg?auto=webp&format=pjpg&width=1200&quality=60',
    genre:'FASHION',
    title:'sample title',
    summary:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis a justo ac commodo. Nunc egestas, dolor commodo semper rutrum, lorem elit venenatis erat, ',
    fullcontent:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis a justo ac commodo. Nunc egestas, dolor commodo semper rutrum, lorem elit venenatis erat, \
    quis pulvinar nisl risus quis eros. Mauris eu massa metus. Aenean vel maximus eros, et fringilla turpis. Nulla in cursus mauris, non congue dolor. Nunc volutpat metus sit amet\
    lacus mollis, sit amet porta mauris pellentesque. Nam nec arcu metus. Proin ex ipsum, dignissim eu dapibus nec, placerat ac urna. Aliquam sodales felis in turpis elementum faucibus.\
    Donec pretium tempus ex. Maecenas in congue nunc. Aenean libero justo, pharetra id aliquam vel, pellentesque sit amet sapien. Proin eu vestibulum felis.'
})

// article.save()



app.get('/',(req,res) => {
    res.render('pages/home')
})
app.get('/page',(req,res) => {
    res.render('pages/webpages')
})












app.listen(3000,() => {
    console.log('server running on port 3000')
})