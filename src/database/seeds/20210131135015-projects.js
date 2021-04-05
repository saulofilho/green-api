'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'projects',
      [
        {
          user_id: 1,
          harvest_name: 'The Green Day (Admin)',
          infos:
            'An aurora (plural: auroras or aurorae),[a] sometimes referred to as polar lights (aurora polaris), northern lights (aurora borealis), or southern lights (aurora australis), is a natural light display in the Earths sky, predominantly seen in high-latitude regions (around the Arctic and Antarctic).',
          strain_name: 'Fragaria chiloensis',
          breeder: 'Mother Nature',
          flowering_type: 'Regular',
          tools: 'Scissors, bucket, watering can',
          nutrients: 'Humus, Bio Mix',
          soil: 'Calorina, Humus and Perlita',
          pot_size: 7,
          light_schedule: '12/6',
          grow_techniques: 'lst, hst, topping',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          harvest_name: 'Buena Onda (Admin)',
          infos:
            'The Solanaceae, or nightshades, are a family of flowering plants that ranges from annual and perennial herbs to vines, lianas, epiphytes, shrubs, and trees, and includes a number of agricultural crops, medicinal plants, spices, weeds, and ornamentals. Many members of the family contain potent alkaloids, and some are highly toxic, but many—including tomatoes, potatoes, eggplant, bell and chili peppers—are used as food. The family belongs to the order Solanales, in the asterid group and class Magnoliopsida (dicotyledons).[2] The Solanaceae consists of about 98 genera and some 2,700 species,[3] with a great diversity of habitats, morphology and ecology.',
          strain_name: 'Solanum lycopersicum',
          breeder: 'Monsanto',
          flowering_type: 'Autoflowering',
          tools: 'Scissors, bucket, watering can',
          nutrients: 'Natural mix.',
          soil: 'Coconut mix and humus.',
          pot_size: 12,
          light_schedule: '12/12',
          grow_techniques: 'lst, topping',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          harvest_name: 'The Green Day',
          infos:
            'An aurora (plural: auroras or aurorae),[a] sometimes referred to as polar lights (aurora polaris), northern lights (aurora borealis), or southern lights (aurora australis), is a natural light display in the Earths sky, predominantly seen in high-latitude regions (around the Arctic and Antarctic).',
          strain_name: 'Fragaria chiloensis',
          breeder: 'Mother Nature',
          flowering_type: 'Regular',
          tools: 'Scissors, bucket, watering can',
          nutrients: 'Humus, Bio Mix',
          soil: 'Calorina, Humus and Perlita',
          pot_size: 7,
          light_schedule: '12/6',
          grow_techniques: 'lst, hst, topping',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          harvest_name: 'Buena Onda',
          infos:
            'The Solanaceae, or nightshades, are a family of flowering plants that ranges from annual and perennial herbs to vines, lianas, epiphytes, shrubs, and trees, and includes a number of agricultural crops, medicinal plants, spices, weeds, and ornamentals. Many members of the family contain potent alkaloids, and some are highly toxic, but many—including tomatoes, potatoes, eggplant, bell and chili peppers—are used as food. The family belongs to the order Solanales, in the asterid group and class Magnoliopsida (dicotyledons).[2] The Solanaceae consists of about 98 genera and some 2,700 species,[3] with a great diversity of habitats, morphology and ecology.',
          strain_name: 'Solanum lycopersicum',
          breeder: 'Monsanto',
          flowering_type: 'Autoflowering',
          tools: 'Scissors, bucket, watering can',
          nutrients: 'Natural mix.',
          soil: 'Coconut mix and humus.',
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
