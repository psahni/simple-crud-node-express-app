var mongoose = require('mongoose');
var Book = require('../db/models/book');
const BookInstance = require('../db/models/bookinstance');

const mongoDB = 'mongodb://localhost:27017/E-commerce';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const async = require('async');

async.parallel({
  one: function(callback) {
    Book.countDocuments({}, function(err, c) {
      console.log('Count is ' + c);
      callback(err, c);
    });
  },
  two: function(callback) {
    BookInstance.countDocuments({}, function(err, c) {
      console.log('Count is ' + c);
      callback(err, c);
    })
  }
}, function(err, results) {
  console.log(results);
  // results is equal to: { one: 1, two: 2 }
});
