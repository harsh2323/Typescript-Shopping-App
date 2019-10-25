const express = require('express');

const app = new express();

import { parseData } from './src/parse/parse';

const bodyParser = require('body-parser');

import { Users } from './src/interfaces/interfaces';

const db = require('./dist/Controllers/userController.js');

const apiRoutes = require('./dist/routesApi');

require('dotenv').config();

const userArray: Users[] = parseData();

console.log(userArray);

app.use(bodyParser.json());

app.use('/api',apiRoutes);

app.use(
    bodyParser.urlencoded({ extended: true })
);


app.get('/', (req, res) => {
    res.json({
        info: 'Hello'
    })
})
console.log(db.getUsers);
app.get('/users', db.getUsers);

app.listen(3000, () => {
    console.log('App listening on 3000')
});
