const express = require('express')
const articleRouter = require('./routes/articleRoute')
const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req,res) => {
    res.render('index', {text: 'Hello'})
})

app.listen(5000, () => console.log('Connected to server'))