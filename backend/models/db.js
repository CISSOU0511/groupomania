const mysql = require('mysql2');

//connexion mysql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'groupomania',
  })
  connection.connect();
  
  module.exports = connection;