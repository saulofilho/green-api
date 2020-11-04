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
        date: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

module.exports = Green;
