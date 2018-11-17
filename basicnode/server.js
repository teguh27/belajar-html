var express = require('express');

var app = express();

app.get('/', function (req, res, next) {
    res.json("Home Page");
});

app.get('/catfish', function (req, res, next) {
    res.json("Catfish");
});

app.get('/name', function (req, res, next) {
    res.json(req.params.name);
});

app.listen(9000, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Running on port 9000");
    }
});