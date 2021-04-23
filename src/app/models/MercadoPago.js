const { Sequelize, Model } = require('sequelize');

class MercadoPago extends Model {
  static init(sequelize) {
    super.init(
      {
        status: Sequelize.STRING,
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

module.exports = MercadoPago;
