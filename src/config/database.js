require('../bootstrap');

module.exports = {
  dialect: process.env.DB_DIALECT || 'postgres',
  type: 'postgres',
  url: 'postgres://postgres:200288@db:5432/green-api',
  host: 'ec2-52-201-184-16.compute-1.amazonaws.com',
  username: 'postgres',
  password: 200288,
  database: 'green-api',
  storage: './__tests__/database.sqlite',
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
