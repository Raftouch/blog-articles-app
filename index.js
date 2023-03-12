const express = require('express')
const articleRouter = require('./routes/articleRoute')
const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req,res) => {
    const articles = [
        {
            title: 'Test article',
            createdAt: Date.now(),
            description: 'Test description'
        },
        {
            title: 'Test article 2',
            createdAt: Date.now(),
            description: 'Test description 2'
        }
    ]
    res.render('index', {articles: articles})
})

app.listen(5000, () => console.log('Connected to server'))