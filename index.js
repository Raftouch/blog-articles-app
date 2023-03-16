const express = require('express')
const mongoose = require('mongoose')

const articleRouter = require('./routes/articleRoute')
const app = express()

mongoose.connect('mongodb://localhost/blog', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// useNewUrlParser & useUnifiedTopology --> not obligatory, only if Warning

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

app.get('/', (req,res) => {
    const articles = [
        {
            title: 'My first article',
            createdAt: new Date(),
            description: 'This is a very interesting article'
        },
        {
            title: 'My second article',
            createdAt: new Date(),
            description: 'This article is even more interesting'
        }
    ]
    res.render('articles/index', {articles: articles})
})

app.use('/articles', articleRouter)

app.listen(5000, () => console.log('App is listening on port 5000'))