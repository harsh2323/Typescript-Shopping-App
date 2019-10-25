"use strict";
exports.__esModule = true;
var express = require('express');
var app = new express();
var parse_1 = require("./src/parse/parse");
var bodyParser = require('body-parser');
var db = require('./dist/Controllers/userController.js');
var apiRoutes = require('./dist/routesApi');
require('dotenv').config();
var userArray = parse_1.parseData();
console.log(userArray);
app.use(bodyParser.json());
app.use('/api', apiRoutes);
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    res.json({
        info: 'Hello'
    });
});
console.log(db.getUsers);
app.get('/users', db.getUsers);
app.listen(3000, function () {
    console.log('App listening on 3000');
});
