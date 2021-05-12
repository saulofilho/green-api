const nodemailer = require('nodemailer');
const { resolve } = require('path');
const nodemailerhbs = require('nodemailer-express-handlebars');
const exphbs = require('express-handlebars');
const mailConfig = require('../config/mail');

class Mail {
  constructor() {
    const { service, host, port, secure, auth } = mailConfig;

    this.transporter = nodemailer.createTransport({
      service,
      host,
      port,
      secure,
      auth: auth.user ? auth : null,
    });

    this.configureTemplates();
  }

  configureTemplates() {
    const viewPath = resolve(__dirname, '..', 'app', 'views', 'emails');

    this.transporter.use(
      'compile',
      nodemailerhbs({
        viewEngine: exphbs.create({
          layoutsDir: resolve(viewPath, 'layouts'),
          partialsDir: resolve(viewPath, 'partials'),
          defaultLayout: 'default',
          extname: '.hbs',
        }),
        viewPath,
        extName: '.hbs',
      })
    );
  }

  sendMail(message) {
    return this.transporter.sendMail({
      ...mailConfig.default,
      ...message,
    });
  }
}

module.exports = new Mail();
