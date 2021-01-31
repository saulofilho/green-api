'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'imgs',
      [
        {
          name: 'TORUS (1).png',
          path: '36a5d3aa56df3581d8473f365e343dcb.png',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('imgs');
  },
};
