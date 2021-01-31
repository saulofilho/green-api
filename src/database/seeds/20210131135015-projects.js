'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'projects',
      [
        {
          user_id: 1,
          harvest_name: 'The Green Alien',
          infos:
            'An aurora (plural: auroras or aurorae),[a] sometimes referred to as polar lights (aurora polaris), northern lights (aurora borealis), or southern lights (aurora australis), is a natural light display in the Earths sky, predominantly seen in high-latitude regions (around the Arctic and Antarctic).',
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
        {
          user_id: 1,
          harvest_name: 'Cachorro Loko',
          infos:
            'An aurora (plural: auroras or aurorae),[a] sometimes referred to as polar lights (aurora polaris), northern lights (aurora borealis), or southern lights (aurora australis), is a natural light display in the Earths sky, predominantly seen in high-latitude regions (around the Arctic and Antarctic).',
          strain_name: 'Tomato',
          breeder: 'Isla',
          flowering_type: 'regular',
          tools: 'tesoura, ventilador, exaustor',
          nutrients: 'natural mix',
          soil: 'coconut',
          pot_size: 12,
          light_schedule: '12/12',
          grow_techniques: 'lst, topping',
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