const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.render('xhtml/index');
});

router.get('/:id', (req, res, next) => {
  res.render('xhtml/' + req.params.id);
});

router.get('/exercise_06|exercise_07|exercise_10/projects', (req, res, next) => {
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

module.exports = router;
