const Sequelize = require('sequelize');

const User = require('../app/models/User');
const Green = require('../app/models/Green');

const databaseConfig = require('../config/database');

const models = [User, Green];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

module.exports = new Database();
