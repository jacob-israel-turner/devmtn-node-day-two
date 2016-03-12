// Madlib
var express = require("express");
var bodyParser = require('body-parser');

var madlib = require('./controllers/madlib');

var app = express();
var port = 9001;

app.use(bodyParser.json()); // Adds request data to req.body

app.post('/api/madlib', madlib.createMadlib);
app.get('/api/madlib', madlib.getMadlib);
app.get('/api/madlib/:madlibId', madlib.getSpecificMadlib);

app.listen(port, function (e) {
  if (e) {
    return console.error(e);
  }
  console.log('Now listening on port:', port);
})
