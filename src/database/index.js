const Sequelize = require('sequelize');

const Green = require('../app/models/Green');
const Img = require('../app/models/Img');
const User = require('../app/models/User');

const databaseConfig = require('../config/database');

const models = [Green, User, Img];

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
