var express = require("express");
var app     = express();
var path    = require("path");

app.use(express.static(__dirname + '/public'));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

app.get('/privacy_policy',function(req,res){
  res.sendFile(path.join(__dirname+'/privacy.html'));
});
app.get('/team',function(req,res){
  res.sendFile(path.join(__dirname+'/team.html'));
});
app.get('/contact',function(req,res){
  res.sendFile(path.join(__dirname+'/contact.html'));
});

app.listen(process.env.PORT || 3000);

console.log("Running at Port 3000");