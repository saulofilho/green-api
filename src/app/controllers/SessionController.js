const jwt = require('jsonwebtoken');

const User = require('../models/User');
const authConfig = require('../../config/auth');

const Mail = require('../lib/Mail');

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
      subject: 'Your data.',
      text: 'teste',
    });
    // await Mail.sendMail({
    //   to: `${user.name} <${user.email}>`,
    //   subject: 'Agendamento cancelado.',
    //   template: 'cancellation',
    //   context: {
    //     provider: user.provider.name,
    //     user: user.user.name,
    //     date: format(parseISO(user.date), "'dia' dd 'de' MMM', às' H:mm'h'", {
    //       locale: pt,
    //     }),
    //   },
    // });

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
