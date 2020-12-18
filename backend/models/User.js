/*modèle de données*/
/*middleware*/
const mysql = require('./db')
/*plugin*/


exports.createUser = function (user, hash) {
    return new Promise((reject, resolve) => {
        const newUser = {
            NOM: user.nom,
            PRENOM: user.prenom,
            EMAIL: user.email,
            PASSWORD: hash,
        }
        mysql.query('INSERT INTO `utilisateurs` SET ? ', newUser, function (error, result, fields) {
            if (error) return reject(error)
            console.log('test:', result)
            resolve(fields)
        })
    })

};


