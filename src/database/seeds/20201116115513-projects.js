'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'projects',
      [
        {
          name: 'teste',
          infos: 'about sadmadf aknw akdapd awdapm camp ww',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'colombinha',
          infos: 'about sadmadf aknw akdapd awdapm camp ww',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'blueberry',
          infos: 'about sadmadf aknw akdapd awdapm camp ww',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('projects', null, {});
  },
};
