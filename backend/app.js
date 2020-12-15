/*framework*/
const express = require('express');
/*middleware*/
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql2');



//const userRoutes = require('./backend/routes/user');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'groupomania',
})
connection.connect(function (error) {
  if (error) {
    console.log('error')
    return
  }
  console.log('connecté !')
});

const app = express();


/*CORS middleware appliqué à toutes les routes*/
app.use((_req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});



app.use(bodyParser.json());
//app.use('/images', express.static(path.join(__dirname, 'images')));

//app.use('/api', userRoutes);
//app.use('/api', userRoutes);

module.exports = app;


