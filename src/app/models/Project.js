const { Sequelize, Model } = require('sequelize');

class Project extends Model {
  static init(sequelize) {
    super.init(
      {
        harvest_name: Sequelize.STRING,
        strain_name: Sequelize.STRING,
        breeder: Sequelize.STRING,
        infos: Sequelize.TEXT,
        tools: Sequelize.STRING,
        nutrients: Sequelize.STRING,
        soil: Sequelize.STRING,
        pot_size: Sequelize.STRING,
        light_schedule: Sequelize.STRING,
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
