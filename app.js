const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const app = express()

require('dotenv').config({path: __dirname+'/.env'})
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('view engine','ejs')


// mongoose.connect('mongodb+srv://pranav:'+process.env.ATLAS_CONNECTION_PASSWORD+'@cluster0.tcjcqt6.mongodb.net/blogDB',{useNewUrlParser:true,useUnifiedTopology: true})
// .then(() => {
//     console.log('connected to database')
// }).catch((err) => {
//     console.log(err)
// })

mongoose.connect('mongodb://127.0.0.1:27017/blogDB',{useNewUrlParser:true,useUnifiedTopology: true})

const articleSchema = mongoose.Schema({
    image: String,
    genre: String,
    title: String,
    summary: String,
    fullcontent: String
})

const Article = mongoose.model('article',articleSchema)


app.get('/',(req,res) => {
    Article.find()
        .then((found) => {
            Article.find().limit(3)
                .then((articles) => {
                    res.render('pages/home' , {articlelist: found,articles:articles})               
                })
                .catch((err) => {
                    console.log(err)
                })
        })
        .catch((err) => {
            console.log(err)
        })
})
app.get('/article/:postid',(req,res) => {
    const postId = req.params.postid
    Article.findOne({_id:postId})
        .then((found) => {
            Article.find().limit(3)
                .then((articles) => {
                    res.render('pages/webpages',{articlecontent:found,articles:articles})                
                })
                .catch((err) => {
                    console.log(err)
                })
        })
        .catch((err) => {
            console.log(err)
        })
})
app.get('/newarticle',(req,res) => {
    res.render('pages/newarticle')
})
app.post('/newarticle',(req,res) => {
    const article = new Article({
        image:req.body.image,
        genre:req.body.genretype,
        title:req.body.titlename,
        summary:req.body.summary,
        fullcontent:req.body.fullcontent
    })
    article.save()
    res.redirect('/')
})

app.get('/about',(req,res) => {
    res.render('pages/about')
})

app.get('/contact',(req,res) => {
    res.render('pages/contact')
})






app.listen(3000,() => {
    console.log('server running on port 3000')
})