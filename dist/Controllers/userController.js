const Pool = require('pg').Pool;
require('dotenv').config();
const pool = new Pool();
const apiUsers = [];
const getUsers = (req, response) => {
    pool.query('SELECT * FROM users', (err, results) => {
        if (err) {
            throw err;
        }
        results.rows.forEach((e) => {
            apiUsers.push(e);
            console.log(e);
        });
        response.status(200).json(results.rows);
    });
};
const getUsersById = (req, response) => {
    const id = parseInt(req.params.id);
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            console.log(error);
        }
        response.status(200).json(results.rows);
    });
};
const postUsers = (req, response) => {
    const { name, email } = req.body;
    pool.query('INSERT INTO users(name, email) VALUES ($1, $2)', [name, email], (error, results) => {
        if (error) {
            console.log(error);
        }
        response.status(200).json(results.rows);
    });
};
const updateUsers = (req, response) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;
    pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id], (error, results) => {
        if (error) {
            console.log(error);
        }
        response.status(200).send('Updated the user successfully!');
    });
};
const deleteUsers = (req, response) => {
    const id = parseInt(req.params.id);
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            console.log(error);
        }
        response.status(200).send('Deleted user successfully');
    });
};
module.exports = {
    apiUsers,
    getUsers,
    getUsersById,
    postUsers,
    updateUsers,
    deleteUsers
};
//# sourceMappingURL=userController.js.map