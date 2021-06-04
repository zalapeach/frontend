const express = require('express');
const path = require('path');
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

app.listen(80, function(){
  console.log('Frontend app listening on port 80');
});
