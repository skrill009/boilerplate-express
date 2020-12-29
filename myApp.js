var express = require('express');
var app = express();
require('dotenv').config();
var bodyParser = require('body-parser');

// !
// * adding a middleware
app.use((req,res,next)=>{
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});
// !

// !
//* Use body-parser to Parse POST Requests
app.use(bodyParser.urlencoded({ extended: false }))

//* parse application/json
app.use(bodyParser.json())

app.get('/body-parsed-info', function(req, res){
  console.log(bodyParser);
})
// !

// !
function getCurrentTime(){
  return new Date().toString();
}

// * chaining middleware
app.get('/now', (req,res,next)=>{
  req.time = getCurrentTime();
  next();
}, function(req,res){
  res.json({"time": req.time});
});
// !

// !
// * Get Route Parameter Input from the client
app.get('/:word/echo', (req,res)=>{
  res.json(
    {echo: req.params.word}
    );
});
// !

// !
//* Get Query Parameter Input from the client
app.get('/name', (req,res)=>{
  res.json(
    {name: req.query.first + " " + req.query.last}
  )
});
// !


// !
// * Get Data from POST Requests
app.post('/name', (req,res)=>{
  res.json(
    {name: req.body.first + " " + req.body.last}
  )
});
// !

// !
//* sending a message and a file
app.get("/",(req, res) =>{
  //*send a message
  //res.send("Hello Express");
  //*send a file 
  res.sendFile(__dirname + "/views/index.html");
});
// !

// !
// app.get("/json", (req,res)=>{
//   res.json({
//     "message": "Hello json"
//   });
// });

//*serving a json
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
// !

//* serve static assets
app.use(express.static(__dirname + "/public"));
app.use("/assets", express.static(__dirname + "/public"));






































 module.exports = app;
