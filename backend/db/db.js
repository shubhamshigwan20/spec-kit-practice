require("dotenv").config();

const { Pool } = require("pg");

const db = new Pool({
  port: 5432,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
});

module.exports = db;
