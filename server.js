// Node.js for the server of mayueen.com, 182.61.60.9
// Author: Yueen Ma

var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');
var app = express();
var exec = require("child_process").exec;

const PORT = process.env.PORT || 80;

function myLogger(req, res, next) {
  if (req.body) {
    console.log('LOG:',req.method,req.url,req.body)
  }
  next()
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(myLogger)

//=============================== get_courses ===============================
app.get('/get_courses', function(req, res) {
  exec("php ./php/courses.php", function(error, stdout, stderr){
    console.log("php running");
    console.log(stdout);
    console.log("--------end of php result--------");
    res.send(stdout);
  });
});


//=============================== Files ===============================
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/css/:file', function(req, res) {
  res.sendFile(path.join(__dirname + '/css/' + req.params.file));
});

app.get('/fonts/:file', function(req, res) {
  res.sendFile(path.join(__dirname + '/fonts/' + req.params.file));
});

app.get('/images/:img', function(req, res) {
  res.sendFile(path.join(__dirname + '/images/' + req.params.img));
});

app.get('/js/:file', function(req, res) {
  res.sendFile(path.join(__dirname + '/js/' + req.params.file));
});

app.get('/vendor/:file', function(req, res) {
  res.sendFile(path.join(__dirname + '/vendor/' + req.params.file));
});

app.get('/favicon.ico', function(req, res) {
  res.sendFile(path.join(__dirname + '/images/favicon.ico'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});