var express = require('express');
var app = express();

app.get("/",(req, res) =>{
  //res.send("Hello Express");
  res.send(__dirname + "public/index.html");
});






































 module.exports = app;
