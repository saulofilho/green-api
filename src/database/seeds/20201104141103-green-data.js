'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'green-data',
      [
        {
          ph: 10.2,
          ec: 11.223,
          temp_max: 2.334,
          temp_min: 2.334,
          moisture: 2.334,
          infos: 'about sadmadf aknw akdapd awdapm camp ww',
          date: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          ph: 10.2,
          ec: 11.223,
          temp_max: 2.334,
          temp_min: 2.334,
          moisture: 2.334,
          infos: 'about sadmadf aknw akdapd awdapm camp ww',
          date: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          ph: 10.2,
          ec: 11.223,
          temp_max: 2.334,
          temp_min: 2.334,
          moisture: 2.334,
          infos: 'about sadmadf aknw akdapd awdapm camp ww',
          date: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('green-data', null, {});
  },
};
