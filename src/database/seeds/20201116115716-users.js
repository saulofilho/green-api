'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'xxx xxx xxx',
          email: 'teste@testea.com',
          password_hash: '123456',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'bbb xxx xxx xxx',
          email: 'teste@testeb.com',
          password_hash: '1234567',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'aaa xxx xxx xxx',
          email: 'teste@testec.com',
          password_hash: '12345678',
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
