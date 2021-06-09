const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.render('index');
});

app.use('/hello', require('./routers/hello'));
app.use('/xhtml', require('./routers/xhtml'));
app.use('/css', require('./routers/css'));

const port = process.env.PORT || 3000;
const privatekey = fs.readFileSync('frontend.key');
const certificate = fs.readFileSync('frontend.crt');

https.createServer({
  key: privatekey,
  cert: certificate
}, app).listen(port, () => {
  console.log('Frontend app listening on port ' + port);
});
