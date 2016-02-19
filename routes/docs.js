var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('docs', { nav: 'Docs' });
});

module.exports = router;
