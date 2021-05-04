const { Sequelize, Model } = require('sequelize');

class Payments extends Model {
  static init(sequelize) {
    super.init(
      {
        email: Sequelize.STRING,
        status_payment: Sequelize.STRING,
        plan_id: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

module.exports = Payments;
