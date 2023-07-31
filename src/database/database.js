import mysql from "promise-mysql";

/*
const connection = mysql.createConnection({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});
*/
const connection = mysql.createConnection({
    host: "localhost",
    database: "world_database",
    user: "root",
    password: "12345",
    port: "3306",
  });

const getConnection = () => {
  return connection;
};

module.exports = {
  getConnection,
};
