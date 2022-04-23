'use strict';
/*module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Articles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      contenu: {
        type: Sequelize.STRING
      },
      imageUrl: {
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
    Articles.associate = (models) => {
      Articles.hasMany(models.Comment, {
        onDelete: "cascade",
      });
    },
    Articles.associate = (models) => {
      Articles.belongsTo(models.Users, {
        onDelete: "cascade",
        foreignKey: "userId",
        sourceKey: "id",
      });
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Articles');
  }
};*/