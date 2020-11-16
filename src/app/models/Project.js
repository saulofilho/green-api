const { Sequelize, Model } = require('sequelize');

class Green extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        infos: Sequelize.TEXT,
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
