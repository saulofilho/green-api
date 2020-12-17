'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'projects',
      [
        {
          user_id: 1,
          infos: 'about sadmadf aknw akdapd awdapm camp ww',
          harvest_name: 'The Real One',
          strain_name: 'Northern Lights',
          breeder: 'Seedsman',
          flowering_type: 'autoflowering',
          tools: 'tesoura, ventilador, exaustor',
          nutrients: 'bio mix',
          soil: 'mix',
          pot_size: 5,
          light_schedule: '12/6',
          grow_techniques: 'lst',
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
