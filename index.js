if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articleRoute')
const methodOverride = require('method-override')
const app = express()
const port = process.env.PORT

mongoose.connect(process.env.MONGO_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// useNewUrlParser & useUnifiedTopology --> not obligatory, only if Warning

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', async (req,res) => {
    const articles = await Article.find().sort({createdAt: 'desc'})
    res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter)

app.listen(port, () => console.log(`App is listening on port ${port}`))