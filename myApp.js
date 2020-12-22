var express = require('express');
var app = express();

// app.get("/",(req, res) =>{
//   //*send a message
      //res.send("Hello Express");
//   //*send a file
//   res.sendFile(__dirname + "/views/index.html");
// });

app.use("/assets", express.static(__dirname + "/public"));






































 module.exports = app;
