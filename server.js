const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/landing', 'index.html'))
})

app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/build', 'index.html'))
})
app.get('/programs', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/build', 'index.html'))
})
app.get('/program/:programId/:chapterId', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/build', 'index.html'))
})

app.listen(9000)
