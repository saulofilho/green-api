const { Sequelize, Model } = require('sequelize');

class Webhooks extends Model {
  static init(sequelize) {
    super.init(
      {
        action: Sequelize.STRING,
        api_version: Sequelize.STRING,
        application_id: Sequelize.STRING,
        date_created: Sequelize.STRING,
        live_mode: Sequelize.STRING,
        type: Sequelize.STRING,
        user_id: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  // static associate(models) {
  //   this.belongsTo(models.Project, {
  //     foreignKey: 'project_id',
  //     as: 'project',
  //   });
  // }
}

module.exports = Webhooks;
