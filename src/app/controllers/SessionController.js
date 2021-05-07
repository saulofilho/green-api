const jwt = require('jsonwebtoken');
const axios = require('axios');

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
    const apiRequest = await axios
      .get(
        `https://api.mercadopago.com/preapproval/search?preapproval_plan_id=${process.env.PLAN_ID}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.YOUR_ACCESS_TOKEN}`,
          },
        }
      )
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err.message);
      });

    const { results } = apiRequest;

    const { email, password } = req.body;

    // const checkCancelled = results
    //   .filter((el) => el.status === 'cancelled')
    //   .map((el) => el.status)
    //   .toString();

    const checkEmail = results
      .filter((el) => el.payer_email === email)
      .map((el) => el.payer_email)
      .toString();

    const checkPayment = results
      .filter((el) => el.payer_email === email)
      .map((el) => el.status)
      .toString();

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

    const { id, name, admin, status_payment } = user;

    if (
      (checkEmail === user.email && status_payment !== checkPayment) ||
      status_payment === 'cancelled'
    ) {
      await user.update({
        status_payment: checkPayment,
      });

      // return res.json({
      //   checkPayment,
      // });
      return res.status(401).json({ error: 'Check your payment, please.' });
    }

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
        status_payment,
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
