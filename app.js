var express = require('express');
var compression = require('compression');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var helmet = require('helmet');

var app = express();

// Security options
app.use(helmet.hidePoweredBy());
// app.use(helmet.csp());
// app.use(helmet.dnsPrefetchControl());
// app.use(helmet.hpkp());
// app.use(helmet.hsts());
// app.use(helmet.ieNoOpen());
// app.use(helmet.noCache());
// app.use(helmet.xssFilter());
// app.use(helmet.frameguard());
// app.use(helmet.noSniff());

// Declare route handlers here
var routes = require(__dirname + '/routes/index');
var docs = require(__dirname + '/routes/docs');
var about = require(__dirname + '/routes/about');
var work = require(__dirname + '/routes/work');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// One Week in milliseconds, used for caching static files
var oneWeek = 604800000;
// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'), { maxAge: oneWeek }));

app.use('/', routes);
app.use('/docs', docs);
app.use('/about', about);
app.use('/work', work);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Application Environment: Uncomment the below line on production server
// app.set('env', 'production');

// development error handler: will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler: no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
