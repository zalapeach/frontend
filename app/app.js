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

app.get('/xhtml/exercise_06|exercise_07|exercise_10/projects', function(req, res, next){
  switch (req.originalUrl){
    case '/xhtml/exercise_06/projects':
      res.render('xhtml/exercise_06/projects');
      break;
    case  '/xhtml/exercise_07/projects':
      res.render('xhtml/exercise_07/projects');
      break;
    case  '/xhtml/exercise_10/projects':
      res.render('xhtml/exercise_10/projects');
      break;
  }
});

app.listen(3000, function(){
  console.log('Frontend app listening on port 3000');
});
