var express = require('express');
var app = express();
require('dotenv').config();

// * adding a middleware
app.use((req,res,next)=>{
  console.log(req.method + " " + req.path + " " + req.ip);
  next();
});

app.get("/",(req, res) =>{
  //*send a message
  //res.send("Hello Express");
  //*send a file 
  res.sendFile(__dirname + "/views/index.html");
});

// app.get("/json", (req,res)=>{
//   res.json({
//     "message": "Hello json"
//   });
// });

app.get("/json", (req,res)=>{
  if(process.env.MESSAGE_STYLE === "uppercase"){
    res.json(
      {"message": "HELLO JSON"}
    )
  }else{
    res.json(
      {"message":"Hello json"}
    )
  }
})

app.use(express.static(__dirname + "/public"));
app.use("/assets", express.static(__dirname + "/public"));






































 module.exports = app;
