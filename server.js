const express = require('express')
const path = require('path')
var compression = require('compression')
const app = express()
var _ = require('lodash');

app.use(compression())
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.use(function(req, res, next) {
    var urls = ['modules/', 'font/', 'js/', 'css/', 'views/', 'img/'];
    if(_.some(urls, (el) => _.includes(req.url, el))) {
        res.set('Content-Encoding', 'gzip');
        res.setHeader("Cache-Control", "public, max-age=604800, must-revalidate");
    }
    return next();
});

app.get('/', function (req, res) {
  res.set('Content-Encoding', 'gzip');
  res.setHeader("Cache-Control", "public, max-age=604800, must-revalidate");
  res.render('index')
})

app.get('/login', function (req, res) {
  res.set('Content-Encoding', 'gzip');
  res.setHeader("Cache-Control", "public, max-age=604800, must-revalidate");
  res.sendFile(path.join(__dirname, 'public/build', 'index.html'))
})
app.get('/programs', function (req, res) {
  res.setHeader("Cache-Control", "public, max-age=604800, must-revalidate");
  res.sendFile(path.join(__dirname, 'public/build', 'index.html'));
  res.set('Content-Encoding', 'gzip');
})
app.get('/program/:programId/:chapterId', function (req, res) {
  res.setHeader("Cache-Control", "public, max-age=604800, must-revalidate");
  res.sendFile(path.join(__dirname, 'public/build', 'index.html'));
  res.set('Content-Encoding', 'gzip');
})

app.listen(9000, () => {
  console.log('http://localhost:9000')
})
