'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'projects',
      [
        {
          harvest_name: 'The Real One',
          strain_name: 'Northern Lights',
          breeder: 'Seedsman',
          infos: 'about sadmadf aknw akdapd awdapm camp ww',
          tools: 'tesoura, ventilador, exaustor',
          nutrients: 'bio mix',
          soil: 'mix',
          pot_size: '5l',
          light_schedule: '12/6',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          harvest_name: 'Colombinha',
          strain_name: 'Northern Lights',
          breeder: 'Northern Lights',
          infos: 'about sadmadf aknw akdapd awdapm camp ww',
          tools: 'tesoura',
          nutrients: 'tesoura',
          soil: 'tesoura',
          pot_size: 'tesoura',
          light_schedule: 'tesoura',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          harvest_name: 'blueberry',
          strain_name: 'Northern Lights',
          breeder: 'Northern Lights',
          infos: 'about sadmadf aknw akdapd awdapm camp ww',
          tools: 'tesoura',
          nutrients: 'tesoura',
          soil: 'tesoura',
          pot_size: 'tesoura',
          light_schedule: 'tesoura',
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
