/*modèle de données*/
/*middleware*/
const mysql = require('./db')
/*plugin*/


exports.createArticles = function (user, hash) {
    return new Promise((resolve, reject) => {
        const newArticles = {
            ID: user.nom,
            CONTENU: user.prenom,
            IMAGE: user.email,
            USER_ID: user,
            CREATION_DATE: user,
        }
        mysql.query('SELECT `articles` SET ? ', newArticles, function (error, result, fields) {
            if (error) return reject(error)
            resolve(fields)
        })
    })
};