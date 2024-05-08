const { Pool } = require('pg');

const pool = new Pool({
user: 'postgres',
host: 'localhost',
database: 'postgres',
password: '261429',
port: 5434,
});
module.exports = pool;
