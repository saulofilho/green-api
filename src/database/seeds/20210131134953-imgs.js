'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'imgs',
      [
        {
          name: 'bg-plants.jpg',
          path: '0a90f02d419006e73ece86bbfddd6d1d.jpg',
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
