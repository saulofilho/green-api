'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('webhooks', {
      id: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      action: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      api_version: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      application_id: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      date_created: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      live_mode: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      user_id: {
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

  down: async (queryInterface) => {
    return queryInterface.dropTable('webhooks');
  },
};
