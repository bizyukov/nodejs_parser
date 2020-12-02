const http = require('http')
const express = require('express')
const fileupload = require("express-fileupload")
const bodyParser = require('body-parser')
const phone = require('./controllers/phone')
const app = express()
const PORT = 3001 //3001 is default

app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }))
app.use(express.static('/views'))
app.use(fileupload())
app.set('views', '/views');
app.set('view engine', 'html')

app.post('/phone', (req, res) => {
	const file = req.files.fileName;
	phone.add(req, res, file.data.toString('utf8').split('\n'))
})
app.get('/phone/:phoneNumber', phone.find)
app.get('/phones', phone.findAll)
app.get('/', function (req, res) {
	res.sendFile('form.html', { root: __dirname + '/views' })
})

http.createServer(app)
	.listen(PORT, () => {
		console.warn(`API started on http://localhost:${PORT}`)
	})
