const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/E-commerce', function(err, client) {
  if(err) throw err;

  let db = client.db('E-commerce');
  db.collection('products').find().toArray(function(err, result){
    if(err) throw err;
    console.log(result);
    client.close();
  });
});

