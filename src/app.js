require('./bootstrap');

const Sentry = require('@sentry/node');
const cors = require('cors');
const path = require('path');
const Youch = require('youch');
const helmet = require('helmet');
const express = require('express');
require('express-async-errors');
const routes = require('./routes');
const sentryConfig = require('./config/sentry');

require('./database');

class App {
  constructor() {
    this.server = express();

    Sentry.init(sentryConfig);

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(Sentry.Handlers.requestHandler());
    this.server.use(helmet());
    this.server.use(
      cors({
        origin: ['https://app.botanicdailydata.com', 'http://localhost:3000'],
        optionsSuccessStatus: 200,
      })
    );
    this.server.use(express.json());
    this.server.use(
      '/imgs',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')),
      cors({
        origin: ['https://app.botanicdailydata.com', 'http://localhost:3000'],
        optionsSuccessStatus: 200,
      })
    );
  }

  routes() {
    this.server.use(routes);
    this.server.use(Sentry.Handlers.errorHandler());
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal server error.' });
    });
  }
}

module.exports = new App().server;
