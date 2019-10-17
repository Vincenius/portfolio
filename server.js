const express = require('express');
const i18n = require('i18n');

// Configure & Run the http server
const app = express();

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');
app.use(express.static(__dirname)) // TODO maybe move to static folder

i18n.configure({
  locales:['en', 'de'],
  directory: __dirname + '/locales'
});
app.use(i18n.init);

app.get('/', function(req, res) {
  res.setLocale('de');
  res.render('index.ejs');
});

app.get('/en', function(req, res) {
  res.setLocale('en');
  res.render('index.ejs');
});

app.get('/privacy', function(req, res) {
  res.setLocale('de');
  res.render('privacy_de.ejs');
});

app.get('/en/privacy', function(req, res) {
  res.setLocale('en');
  res.render('privacy_en.ejs');
});

app.listen(3000, () => {
  console.log('HTTP server running on port 3000');
});