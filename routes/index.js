var express = require('express');
var sendgrid  = require('sendgrid')('Your API Key here');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { nav: 'Home' });
});

/* Handle form submission */
router.get('/contact', function (req, res) {

  sendgrid.send({
        to:       'example@example.com',
        from:     req.query.email,
        subject:  'Message received from: ' + req.query.name,
        text:     req.query.msg
    }, function(err, json) {
        if (err) { return console.error(err); }
        res.send("Success");
    });
});

module.exports = router;
