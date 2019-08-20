"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var apiRoutes = require('./dist/routesApi');
var app = express();
var uri = 'mongodb://localhost:27017';
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: false });
var db = mongoose.Connection;
app.use('/api', apiRoutes);
app.get('/', function (req, res) {
    res.send('Hello world');
});
app.listen(3000, function () {
    console.log("App listenting on 3000");
});
