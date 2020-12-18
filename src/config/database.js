require('../bootstrap');

module.exports = {
  dialect: process.env.DB_DIALECT || 'postgres',
  type: 'postgres',
  url: process.env.DATABASE_URL,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  storage: './__tests__/database.sqlite',
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
