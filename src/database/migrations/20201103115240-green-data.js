'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('green-data', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      ph: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      temp_max: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      temp_min: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      moisture: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      infos: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('green-data');
  },
};
