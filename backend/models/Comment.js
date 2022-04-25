/*const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('groupomania', 'root', '', {
    dialect: 'mysql'
})

const Comment = sequelize.define('commentaires', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    articleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'articles',
            key: 'id'
        }
    },
    commentaire: {
        type: DataTypes.STRING,
        allowNull: false
    },
});
Comment.associate = (models) => {
    Comment.belongsTo(models.articles, {
        onDelete: "cascade",
        foreignKey: "articleId",
        sourceKey: "id",
    });
},
Comment.associate = (models) => {
    Comment.belongsTo(models.users, {
        onDelete: "cascade",
        foreignKey: "userId",
        sourceKey: "id",
    });
},
Comment.sync()
    .then(() => console.log('Table commentaire créée dans la bdd'))
    .catch(error => console.error('Une erreur est survenue', error));

module.exports = Comment;*/