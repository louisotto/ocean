var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('work', { nav: 'Work' });
});

module.exports = router;
