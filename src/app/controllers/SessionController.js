const jwt = require('jsonwebtoken');

const User = require('../models/User');
const authConfig = require('../../config/auth');

const Mail = require('../../lib/Mail');

// const mailgun = require('mailgun-js');
// const DOMAIN =
//   'https://api.mailgun.net/v3/sandbox6a493d46863b4168abc8a76ae3856d1e.mailgun.org';
// const mg = mailgun({
//   apiKey: process.env.API_KEY,
//   domain: DOMAIN,
// });
class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({
        error: 'User not found.',
      });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password doest not match.' });
    }

    const { id, name, admin } = user;

    await Mail.sendMail({
      to: `${user.name} <${user.email}>`,
      subject: 'Welcome to Botanic Daily Data.',
      template: 'welcome',
      context: {
        user: user.name,
        email: user.email,
        password: password,
      },
    });

    return res.json({
      user: {
        id,
        name,
        email,
        admin,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

module.exports = new SessionController();

// const data = {
//   from: 'Botanic Daily Data <hi@buenavistalab.com>',
//   to: `${user.name} <${user.email}>`,
//   subject: 'Welcome to Botanic Daily Data.',
//   text: 'Testing some Mailgun awesomness!',
// };
// mg.messages().send(data, function (error, body) {
//   console.log('body---->', body);
//   console.log('error---->', error);
// });
