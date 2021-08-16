const express = require('express')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/build', 'index.html'))
})
app.get('/programs', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/build', 'index.html'));
})
app.get('/program/:programId/:chapterId', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/build', 'index.html'));
})

app.listen(9000, () => {
  console.log('http://localhost:9000')
})
