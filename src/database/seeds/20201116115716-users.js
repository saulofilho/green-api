'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Saulo Filho',
          email: 'hello@saulofilho.com',
          password_hash: '123456',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Refaela',
          email: 'refa@rafa.com',
          password_hash: '123456',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
