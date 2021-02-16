const { Sequelize, Model } = require('sequelize');

class Calendar extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        all_day: Sequelize.BOOLEAN,
        start: Sequelize.DATE,
        end: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Project, {
      foreignKey: 'project_id',
      as: 'project',
    });
  }
}

module.exports = Calendar;
