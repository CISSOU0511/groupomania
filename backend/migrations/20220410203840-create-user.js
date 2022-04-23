'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom: {
        type: Sequelize.STRING
      },
      prenom: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    User.associate = (models) => {
      User.hasMany(models.Articles, {
        onDelete: "cascade",
      });
      User.hasMany(models.Comment, {
        onDelete: "cascade",
      });
    }
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};