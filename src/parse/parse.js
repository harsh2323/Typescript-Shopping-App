"use strict";
exports.__esModule = true;
var Pool = require('pg').Pool;
var pool = new Pool();
var users = [];
exports.parseData = function () {
    pool.on('error', function (err, client) {
        console.log('Unexpected error occured during run time', err);
        process.exit(-1);
    });
    pool.connect(function (err, client, done) {
        if (err)
            throw err;
        client.query('SELECT * FROM users', function (err, results) {
            if (err) {
                console.log(err.stack);
            }
            results.rows.forEach(function (e) {
                users.push(e);
                console.log(e);
            });
        });
    });
    return users;
};
