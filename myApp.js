var express = require('express');
var app = express();

app.get("/",(req, res) =>{
  //*send a message
  //res.send("Hello Express");
  //*send a file 
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req,res)=>{
  res.json({
    "message": "Hello json"
  });
});

app.use(express.static(__dirname + "/public"));
app.use("/assets", express.static(__dirname + "/public"));






































 module.exports = app;
