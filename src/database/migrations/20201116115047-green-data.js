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
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      infos: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      ph_water: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      ph_soil: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      ec: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      temp_max: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      temp_min: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      moisture: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      air_humidity: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      phase: {
        type: Sequelize.STRING,
        allowNull: true,
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
