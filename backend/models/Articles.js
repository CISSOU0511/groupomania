/*modèle de données*/



exports.createArticles = function (user) {
    return new Promise((resolve, reject) => {
        const newArticles = {
            ID: user.nom,
            CONTENU: user.prenom,
            IMAGE: user.email,
            USER_ID: user,
            CREATION_DATE: user,
        }
        mysql.query('INSERT INTO `articles` SET ? ', newArticles, function (error, result, fields) {
            if (error) return reject(error)
            resolve(result)
        })
    })
};