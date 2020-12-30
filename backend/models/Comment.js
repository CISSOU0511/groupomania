const mysql = require('./db');

exports.createComment = function (comment) {
    return new Promise((resolve, reject) => {
        const newComment = {
            COMMENTAIRE: comment.commentaire,
            USER_ID: comment.user_id,
            ARTICLE_ID: comment.article_id

        }
        mysql.query('INSERT INTO `commentaire` SET ? ', newComment, function (error, result, fields) {
            if (error) return reject(error)
            resolve(result)
        })
    })
};
exports.updateComment = function (comment) {
    return new Promise((resolve, reject) => {
        mysql.query('UPDATE `commentaire` SET COMMENTAIRE = ? WHERE ID = ?', [comment.commentaire, comment.id], function (error, result, fields) {
            if (error) return reject(error)
            resolve(result)
        })
    })
};