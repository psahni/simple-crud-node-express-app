require('./src/db/mongodb/mongo_client.js');

const express = require('express');
const path = require('path');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const app = express();
const logger = require('morgan');

const usersRouter = require('./src/routes/users');
console.log(usersRouter);
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

console.log("Env:", process.env.NODE_ENV);

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));


// const router = express.Router();
/*
  router.get('/', function(req, res) {
    res.send('Wiki home page');
  });
*/

// An example middleware function
let middleFunction = function(req, res, next) {
  // ... perform some operations
  console.log('a_middleware_function()');
  next(); // Call next() so Express will call the next middleware function in the chain.
}

/* 
  This is use of middleware without route
  app.use(a_middleware_function);
*/

// Function added with use() for a specific route
/**
 * This is use of middleware with route
 */


app.use('/someroute', middleFunction);

app.all('*', function(req, res, next) {
  console.log('$$ Accessing the secret section ...');
  next(); // pass control to the next handler
});

app.use('/users', usersRouter);


app.get('/', function(req, res) {
  res.send('Hello Prashant!!');
});

app.get('/home', function(req, res) {
  res.render('home', { title: 'About EJS', message: 'EJS templates working' });
});



app.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}!`)
});

/**
 * ERROR HANDLING FUNCTION. Must be called in the last.
*/

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});
