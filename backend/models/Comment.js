const mysql = require('mysql2');

exports.createComment = function (comment) {
    return new Promise((resolve, reject) => {
        const newComment = {
            COMMENTAIRE: comment,
        }
        mysql.query('INSERT INTO `commentaire` SET ? ', newComment, function (error, result, fields) {
            if (error) return reject(error)
            resolve(result)
        })
    })
};

/*exports.getAllComment = function(comment) {
        mysql.query('SELECT * FROM `commentaire` WHERE comment= ? ', [comment], function (error, result, fields) {
            if (error) return reject(error)
            resolve(result)
        })
};*/