const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.render('hello/index');
});

module.exports = router;
