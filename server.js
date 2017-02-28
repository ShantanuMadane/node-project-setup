var express = require('express');
var app = express();
var morgan = require('morgan');
app.use(morgan('combined'));
app.get('/', function(req, res) {
  res.send('Hello World\n');
});

app.listen(3001);
console.log('Listening on port 3001...');