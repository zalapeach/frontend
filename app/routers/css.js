var router = require('express').Router();

router.get('/', function(req, res, next){
  res.render('css/index');
});

router.get('/:id', function(req, res, next){
  res.render('css/' + req.params.id);
});

module.exports = router;
