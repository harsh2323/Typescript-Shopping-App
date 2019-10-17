const express = require('express');
const app = new express();
const bodyParser = require('body-parser');

const db = require('./dist/Controllers/queries.js');

const apiRoutes = require('./dist/routesApi');

require('dotenv').config();

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

app.get('/users', db.getUsers);

app.listen(3000, () => {
    console.log('App listening on 3000')
});
