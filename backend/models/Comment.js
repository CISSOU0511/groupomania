/*modèle de données*/
/*middleware*/
const mysql = require('./db')
/*plugin*/


exports.createComment = function (comment, hash) {
    return new Promise((resolve, reject) => {
        const newComment = {             
            ARTICLE_ID: user.email,
            COMMENTAIRE: user,
            CREATION_DATE: user,
        }
        mysql.query('SELECT * FROM `commentaire` WHERE commentaire ', newComment, function (error, result, fields) {
            if (error) return reject(error)
            resolve(fields)
        })
    })
};