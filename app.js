"use strict";
exports.__esModule = true;
var express = require("express");
require('dotenv').config();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var apiRoutes = require('./dist/routesApi');
var app = express();
var dev_db_url = 'mongodb://mongo:27017/';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true }).then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.log(err);
})
var db = mongoose.Connection;
app.use('/api', apiRoutes);
app.get('/', function (req, res) {
    res.send('Hello world');
});
app.listen(3000, function () {
    console.log("App listenting on 3000");
});

//check comment 
//fixed the mistake