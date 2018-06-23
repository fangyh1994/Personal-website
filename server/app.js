var express = require("express");
var app = express();

var path = require("path");
var routes = require("./router.js").routes;

// var router = require("./router/router.js");

var session = require('express-session');
var fs = require("fs");


// http session configuration
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.get("/http_client", function(req, res, next) {
    fs.readFile("./client.html",function(err, data) {
        if (err) {
            console.log("error:" + err.message);
            res.writeHead(500); 
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'}); 
            res.end(data);
        }
    });
});


routes(app);
app.listen(3000);