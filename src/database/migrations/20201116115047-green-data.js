'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('greens', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      project_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'projects', key: 'id' },
      },
      infos: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      ph_water: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      ph_soil: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      ec: {
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
      air_humidity: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      phase: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('greens');
  },
};
