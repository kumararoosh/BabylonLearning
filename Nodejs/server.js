var express = require('express');
var app     = express();
var http    = require('http').Server(app);

app.use(express.static(__dirname + '/public'));

http.listen(4000, '0.0.0.0', function() {
  console.log("Server is listening on port 80");
});
