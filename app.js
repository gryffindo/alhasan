const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(express.static('public'))
app.use('/scripts', express.static(__dirname + 'public/'))
app.use('/img', express.static(__dirname + 'public/styles'))
app.use('/styles', express.static(__dirname + 'public/styles'))



app.set('view engine', 'ejs')

app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/css', express.static(__dirname + ('views/styles/')))



app.use('/awards', (req, res) => {
	res.render('pages/awards')
})
app.use('/portfolio', (req, res) => {
	res.render('pages/portfolio')
})
app.use('/article', (req, res) => {
	res.render('pages/article')
})
app.use('/', (req, res) => {
	res.render('pages/main')
})

const PORT = process.env.PORT || 3031

app.listen(PORT, () => {
	console.log(`Server is running at ${PORT}`)
})