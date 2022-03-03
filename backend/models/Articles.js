const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('groupomania', 'root', '', {
    dialect: 'mysql'
});

const User = require('../models/User');

const Article = sequelize.define('Articles', {
    id: {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull: false        
    },
    contenu: {
        type : DataTypes.STRING,
        allowNull: false
    },
    imageUrl: {
        type : DataTypes.STRING,
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
Article.belongsTo(User, {foreignKey: 'CreateId', onDelete:'cascade'});
User.hasMany(Article, {foreignKey: 'CreateId', onDelete:'cascade'});

Article.sync()
.then(() => console.log('Table article créée dans la bdd'))
.catch(error => console.error('Une erreur est survenue', error));

module.exports = Article;