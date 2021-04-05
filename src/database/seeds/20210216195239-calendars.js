module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'calendars',
      [
        {
          project_id: 1,
          title: 'Watering',
          all_day: false,
          start: '2021-01-01T15:00:00',
          end: '2021-12-31T15:00:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          project_id: 1,
          title: 'Nutrients',
          all_day: false,
          start: '2021-03-01T15:00:00',
          end: '2021-05-30T15:00:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          project_id: 2,
          title: 'Flushing',
          all_day: true,
          start: '2021-04-01T15:00:00',
          end: '2021-06-30T15:00:00',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('calendars', null, {});
  },
};
