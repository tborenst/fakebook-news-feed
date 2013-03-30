var express = require("express");
var path = require("path");
var app = express();

var allowCrossDomain = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT,GET,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type,X-Requested-With");

    next();
}


// Config
app.configure(function () {
  app.use(express.bodyParser());
  app.use(allowCrossDomain);
});

// =========== ROUTES ==========

posts = [];

// Get all todos
app.post("/posts", function (req, res) {
  posts.push({name: req.body.name, content: req.body.content});
  res.send({success: true});
});

app.get("/posts", function (req, res) {
  return res.send({posts: posts});
});

// Launch server
app.listen(8080);