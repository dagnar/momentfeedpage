var express = require("express");
var app = express();
app.use(express.static(__dirname+"/dist"));
app.get("/", function(req, res){
  res.sendfile("/index.html");
});
var port = process.env.PORT || 9000;
app.listen(port, function() {
    console.log("Listening on port " + port);
});


// var gzippo = require('gzippo');
// var express = require('express');
// var app = express();
 
// app.use(express.logger('dev'));
// app.use(gzippo.staticGzip("" + __dirname + "/dist"));
// app.listen(process.env.PORT || 5000);