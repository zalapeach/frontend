var express = require('express');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next){
  res.render('index');
});

app.get('/xhtml', function(req, res, next){
  res.render('xhtml/index');
});

app.get('/xhtml/:id', function(req, res, next){
  res.render('xhtml/' + req.params.id);
});

app.listen(3000, function(){
  console.log('Frontend app listening on port 3000');
});
