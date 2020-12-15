/*modèle de données*/
/*middleware*/
const mysql = require('mysql2');

/*plugin*/

//connexion mysql
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'groupomania',
})
connection.connect();

module.exports = connection;

exports.createUser = function (user) {
    const newUser = {
        NOM: user.nom,
        PRENOM: user.prenom,
        EMAIL: user.email,
        PASSWORD: user.password,
    }
    mysql.query('INSERT INTO `utilisateurs` SET ? ', newUser, function (error, result, fields) {
        if (error) return error
        return result
    })
};


