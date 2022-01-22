require('./src/db/mongodb/mongo_client.js');

const express = require('express');
const app = express();
const logger = require('morgan');
const PORT = process.env.PORT || 3000;

console.log(process.env.NODE_ENV);
app.use(logger('dev'));
app.use(express.static('public'));

// const router = express.Router();
/*
  router.get('/', function(req, res) {
    res.send('Wiki home page');
  });
*/

// An example middleware function
let a_middleware_function = function(req, res, next) {
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
app.use('/someroute', a_middleware_function);

app.all('*', function(req, res, next) {
  console.log('$$ Accessing the secret section ...');
  next(); // pass control to the next handler
});

app.get('/', function(req, res) {
  res.send('Hello Prashant!!');
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



