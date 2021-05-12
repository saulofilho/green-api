// if (process.env.NODE_ENV === 'development') {
//   console.log('DEV');
//   module.exports = {
//     service: process.env.MAIL_SERVICE,
//     host: process.env.MAIL_HOST,
//     port: process.env.MAIL_PORT,
//     secure: false,
//     auth: {
//       user: process.env.MAIL_USER,
//       pass: process.env.MAIL_PASS,
//     },
//     default: {
//       from: 'Botanic Daily Data <hi@buenavistalab.com>',
//     },
//   };
// } else {
//   console.log('PROD');
//   module.exports = {
//     service: process.env.MAIL_SERVICE_PROD,
//     host: process.env.MAIL_HOST_PROD,
//     port: process.env.MAIL_PORT_PROD,
//     secure: false,
//     auth: {
//       user: process.env.MAIL_USER_PROD,
//       pass: process.env.MAIL_PASS_PROD,
//     },
//     default: {
//       from: 'Botanic Daily Data <hi@buenavistalab.com>',
//     },
//   };
// }
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
