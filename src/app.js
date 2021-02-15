require('./bootstrap');

const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const express = require('express');
const routes = require('./routes');

require('./database');

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(helmet());
    this.server.use(
      cors({
        origin: ['https://app.botanicdailydata.com', 'http://localhost:3000/'],
        optionsSuccessStatus: 200,
      })
    );
    this.server.use(express.json());
    this.server.use(
      '/imgs',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
