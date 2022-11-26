const pool = require("./database");


const create = (description) =>
    pool.query("INSERT INTO todo (description) values ($1) RETURNING *", [
        description,
    ]);

const get = () => { const get = () => pool.query('SELECT * FROM todo');

const remove = (id) => {
    
}