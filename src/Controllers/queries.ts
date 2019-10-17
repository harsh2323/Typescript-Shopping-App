import { response } from "express";
import { parse } from "path";

const Pool = require('pg').Pool;
require('dotenv').config();
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});
/**
 * Displays the list of users in the database
 * @param req 
 * @param response 
 */
const getUsers = (req, response) => {
  // sql query to display data
  pool.query('SELECT * FROM users', (err, results) => {
    if (err) {
      throw err;
    }

    response.status(200).json(results.rows)
  })
}

/**
 * Displays the data of a single user
 * @param req 
 * @param response 
 */
const getUsersById = (req, response) => {
  const id = parseInt(req.params.id);

  // sql query to display the data of a single user
  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if(error) {
      console.log(error);
    }
    response.status(200).json(results.rows)
  })
}

/**
 * Posts a new user in the database
 * @param req 
 * @param response 
 */
const postUsers = (req, response) => {
  const { name, email } = req.body;

  // sql query to insert data
  pool.query('INSERT INTO users(name, email) VALUES ($1, $2)', [name, email],(error, results) => {
    if(error) {
      console.log(error);
    }
    response.status(200).json(results.rows);
  })
}

/**
 * Updates an existing user in the database
 * @param req
 * @param response 
 */
const updateUsers = (req, response) => {
  // get the id from the request parameters
  const id = parseInt(req.params.id);
  const { name, email } = req.body;

  // sql query to update existing data
  pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id], (error, results) => {
    if(error) {
      console.log(error);
    }
    response.status(200).send('Updated the user successfully!');
  })
}

/**
 * Deletes a user from the database
 * @param req 
 * @param response 
 */
const deleteUsers = (req, response) => {

  const id = parseInt(req.params.id);

  // sql query to delete a user
  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if(error){
      console.log(error);
    }
    response.status(200).send('Deleted user successfully')
  })

}
// Export all the functions
module.exports = {
  getUsers, 
  getUsersById,
  postUsers,
  updateUsers,
  deleteUsers
}