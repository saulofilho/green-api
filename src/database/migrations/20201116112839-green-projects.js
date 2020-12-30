'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('projects', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'users', key: 'id' },
      },
      harvest_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      infos: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      strain_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      breeder: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      flowering_type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      tools: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      nutrients: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      soil: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      pot_size: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      light_schedule: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      grow_techniques: {
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
    return queryInterface.dropTable('projects');
  },
};
