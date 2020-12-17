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
        allowNull: false,
      },
      infos: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      strain_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      breeder: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      flowering_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tools: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nutrients: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      soil: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pot_size: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      light_schedule: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      grow_techniques: {
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
    return queryInterface.dropTable('projects');
  },
};
