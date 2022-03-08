const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('groupomania', 'root', '', {
    dialect: 'mysql'
})
const User = require('../models/User');
const Article = require('../models/Articles');

const Comment = sequelize.define('commentaire', {
    id: {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull: false        
    },
    userId: {
        type : DataTypes.INTEGER,
        allowNull: false
    },
    articleId: {
        type : DataTypes.INTEGER,
        allowNull: false
    },
    commentaire: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull:false,
        defaultValue: Sequelize.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull:false,
        defaultValue: Sequelize.NOW
    }
});


Comment.belongsTo(User, {foreignKey: 'userId', onDelete: "cascade"});
Comment.belongsTo(Article, {foreignKey: "articleId", onDelete: "cascade"});

Comment.sync()
.then(() => console.log('Table commentaire créée dans la bdd'))
.catch(error => console.error('Une erreur est survenue', error));

module.exports = Comment;