const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('groupomania', 'root', '', {
    dialect: 'mysql'
});


const Article = sequelize.define('Articles', {
    contenu: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: 'Users',
            key: 'id'
        }
    },
});
/*Article.associate = (models) => {
    Article.hasMany(models.Comment, {
      onDelete: "cascade",
      foreignKey: "userId",
      sourceKey: "id",
    });
  },*/
Article.associate = (models) => {
    Article.belongsTo(models.users, {
        onDelete: "cascade",
        foreignKey: "userId",
        sourceKey: "id",
    });
}
Article.sync()
    .then(() => console.log('Table article créée dans la bdd'))
    .catch(error => console.error('Une erreur est survenue', error));

module.exports = Article;