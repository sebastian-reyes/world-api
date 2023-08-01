import mysql from "promise-mysql";
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORT,
  });

const getConnection = () => {
  return connection;
};

module.exports = {
  getConnection,
};
