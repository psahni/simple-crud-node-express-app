const async = require('async');
const Book = require('../db/models/book');
const Author = require('../db/models/author');
const Genre = require('../db/models/genre');
const BookInstance = require('../db/models/bookinstance');

exports.index = function(req, res) {
  async.parallel({
    book_count: function(callback) {
        Book.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
    },
    book_instance_count: function(callback) {
        BookInstance.countDocuments({}, callback);
    },
    book_instance_available_count: function(callback) {
        BookInstance.countDocuments({status:'Available'}, callback);
    },
    author_count: function(callback) {
        Author.countDocuments({}, callback);
    },
    genre_count: function(callback) {
        Genre.countDocuments({}, callback);
    }
  }, function(err, results) {
    res.render('books/index.ejs', { title: 'Local Library Home', error: err, data: results });
  });
}

// Display list of all books.
exports.book_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Book list');
};

// Display detail page for a specific book.
exports.book_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};

// Display book create form on GET.
exports.book_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create GET');
};

// Handle book create on POST.
exports.book_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create POST');
};

// Display book delete form on GET.
exports.book_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete GET');
};

// Handle book delete on POST.
exports.book_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete POST');
};

// Display book update form on GET.
exports.book_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update GET');
};

// Handle book update on POST.
exports.book_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book update POST');
};
