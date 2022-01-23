const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost:27017/E-commerce';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
  console.log('$$ Successfully connected');
}).catch(() => {
  console.log('not connected');
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
