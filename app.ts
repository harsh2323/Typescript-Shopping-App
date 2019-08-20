import * as express from 'express';

import * as bodyParser from 'body-parser';

import * as mongoose from 'mongoose';

import { Application } from 'express-serve-static-core';

const apiRoutes = require('./dist/routesApi')

const app: Application = express();

const uri = 'mongodb://localhost:27017';

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });

var db = mongoose.Connection;

app.use('/api', apiRoutes);

app.get('/get', (req, res) => {
  res.send('Hello world');
});

app.listen(3000, () => {
    console.log("App listenting on 3000");
});
