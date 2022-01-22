const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.get('', function(req, res) {
  res.send('Hello Prashant!!');
});


app.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}!`)
});



