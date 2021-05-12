if (process.env.NODE_ENV === 'development') {
  module.exports = {
    service: process.env.MAIL_SERVICE,
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    default: {
      from: 'Botanic Daily Data <hi@buenavistalab.com>',
    },
  };
}

if (process.env.NODE_ENV === 'production') {
  module.exports = {
    service: process.env.MAIL_SERVICE_PROD,
    host: process.env.MAIL_HOST_PROD,
    port: process.env.MAIL_PORT_PROD,
    secure: false,
    auth: {
      user: process.env.MAIL_USER_PROD,
      pass: process.env.MAIL_PASS_PROD,
    },
    default: {
      from: 'Botanic Daily Data <hi@buenavistalab.com>',
    },
  };
}
