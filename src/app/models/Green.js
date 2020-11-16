const { Sequelize, Model } = require('sequelize');

class Green extends Model {
  static init(sequelize) {
    super.init(
      {
        ph: Sequelize.DECIMAL,
        ec: Sequelize.DECIMAL,
        temp_max: Sequelize.DECIMAL,
        temp_min: Sequelize.DECIMAL,
        moisture: Sequelize.DECIMAL,
        infos: Sequelize.TEXT,
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
    this.belongsTo(models.Img, { foreignKey: 'img_id', as: 'img' });
  }
}

module.exports = Green;
