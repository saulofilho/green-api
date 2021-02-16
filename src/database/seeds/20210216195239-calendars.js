module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'calendars',
      [
        {
          project_id: 1,
          title: 'reuniao',
          all_day: false,
          start: new Date(),
          end: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          project_id: 1,
          title: 'Talk com clientes de LA.',
          all_day: true,
          start: new Date(),
          end: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          project_id: 2,
          title: 'This is about the project id number two.',
          all_day: false,
          start: new Date(),
          end: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          project_id: 1,
          title: 'Showtime.',
          all_day: true,
          start: new Date(),
          end: new Date(),
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
