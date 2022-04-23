const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('groupomania', 'root', '', {
    dialect: 'mysql'
})

const Comment = sequelize.define('commentaire', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    articleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    commentaire: {
        type: DataTypes.STRING,
        allowNull: false
    },
});
Comment.sync()
    .then(() => console.log('Table commentaire créée dans la bdd'))
    .catch(error => console.error('Une erreur est survenue', error));

module.exports = Comment;