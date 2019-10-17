import { response } from "express";

const Pool = require('pg').Pool;
require('dotenv').config();
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});
const getUsers = (req, response) => {
  pool.query('SELECT * FROM users', (err, results) => {
    if (err) {
      throw err;
    }

    response.status(200).json(results.rows)
  })
}

const postUsers = (req, response) => {
  const { name, email } = req.body;

  pool.query('INSERT INTO users(name, email) VALUES ($1, $2)', [name, email],(error, results) => {
    if(error) {
      console.log(error);
    }
    response.status(200).json(results.rows);
  })
}

module.exports = {
  getUsers, 
  postUsers
}