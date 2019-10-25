const { Pool } = require('pg');

const pool = new Pool();

import { Users } from '../interfaces/interfaces';

const users: Users[] = [];

export const parseData = () => {
    pool.on('error', (err, client) => {
        console.log('Unexpected error occured during run time', err);
        process.exit(-1);
    });
    
    pool.connect((err, client, done) => {
        if(err) throw err;
    
        client.query('SELECT * FROM users', (err, results) => {
             if(err){
                 console.log(err.stack);
             }
    
             results.rows.forEach((e) => {
                 users.push(e);
                 console.log(e);
             });
    
        })
    });

    return users;
}
