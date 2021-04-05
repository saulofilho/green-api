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
        allowNull: false,
        references: { model: 'projects', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      infos: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: '',
      },
      ph_water: {
        type: Sequelize.DECIMAL,
        allowNull: true,
        defaultValue: 0,
      },
      ph_soil: {
        type: Sequelize.DECIMAL,
        allowNull: true,
        defaultValue: 0,
      },
      ec: {
        type: Sequelize.DECIMAL,
        allowNull: true,
        defaultValue: 0,
      },
      temp_max: {
        type: Sequelize.DECIMAL,
        allowNull: true,
        defaultValue: 0,
      },
      temp_min: {
        type: Sequelize.DECIMAL,
        allowNull: true,
        defaultValue: 0,
      },
      moisture: {
        type: Sequelize.DECIMAL,
        allowNull: true,
        defaultValue: 0,
      },
      air_humidity: {
        type: Sequelize.DECIMAL,
        allowNull: true,
        defaultValue: 0,
      },
      plant_size: {
        type: Sequelize.DECIMAL,
        allowNull: true,
        defaultValue: 0,
      },
      phase: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: '',
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
