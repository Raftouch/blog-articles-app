const express = require('express')
const articleRouter = require('./routes/articleRoute')
const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

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
    res.render('index', {articles: articles})
})

app.listen(5000, () => console.log('App is listening on port 5000'))