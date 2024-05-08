const pool = require('../config/dbConFig');
class UserModel {

async createUser(user) {
const { id,userName, email,phoneNum } = user;
const query = 'INSERT INTO users (id,userName, email,phoneNum) VALUES ($1, $2,$3,$4) RETURNING *';
const values = [id,userName, email,phoneNum];
const { rows } = await pool.query(query, values);
return rows[0];
}

async getAllUsers() {
    const query = 'SELECT * FROM users';
    const { rows } = await pool.query(query);
    return rows;
    }

async updateUser(id,user) {
const { username, email,phonenum } = user;
const query = 'UPDATE users SET  username = $1, email  = $2,phoneNum = $3 WHERE id = $4 RETURNING *';
const values = [ username, email,phonenum,id];
const { rows } = await pool.query(query, values);
return rows[0];
}


async deleteUser(id) {
    const query = 'DELETE FROM users WHERE id = $1';
    await pool.query(query, [id]);
    }
    
}
module.exports = new UserModel();