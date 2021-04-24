const Sequelize = require('sequelize');

const Green = require('../app/models/Green');
const Img = require('../app/models/Img');
const Project = require('../app/models/Project');
const User = require('../app/models/User');
const Calendar = require('../app/models/Calendar');
const MercadoPago = require('../app/models/MercadoPago');
const Webhook = require('../app/models/Webhook');

const databaseConfig = require('../config/database');

const models = [Green, User, Img, Project, Calendar, MercadoPago, Webhook];

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
