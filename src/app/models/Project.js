const { Sequelize, Model } = require('sequelize');

class Project extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        infos: Sequelize.TEXT,
        tools: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    // this.hasMany(models.Green, { foreignKey: 'green_id', as: 'green' });
  }
}

module.exports = Project;
