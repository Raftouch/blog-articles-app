const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articleRoute')
const methodOverride = require('method-override')
const app = express()

mongoose.connect('mongodb://localhost/blog', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// useNewUrlParser & useUnifiedTopology & useCreateIndex: true --> not obligatory, only if Warning

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', async (req,res) => {
    const articles = await Article.find().sort({createdAt: 'desc'})
    res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter)

app.listen(5000, () => console.log('App is listening on port 5000'))