const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('groupomania', 'root', '', {
    dialect: 'mysql'
});

const User = sequelize.define('users', {
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false
    },
});

User.sync()
    .then(() => console.log('Table utilisateurs créée dans la bdd'))
    .catch(error => console.error('Une erreur est survenue', error));

module.exports = User;