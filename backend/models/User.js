const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('groupomania', 'root', '', {
    dialect: 'mysql'
});

const User = sequelize.define('utilisateurs', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    EMAIL: {
        type: DataTypes.STRING,
        allowNull: false
    },
    PASSWORD: {
        type: DataTypes.STRING,
        allowNull: false
    },
    NOM: {
        type: DataTypes.STRING,
        allowNull: false
    },
    PRENOM: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
});

User.sync()
    .then(() => console.log('Table utilisateurs créée dans la bdd'))
    .catch(error => console.error('Une erreur est survenue', error));

module.exports = User;