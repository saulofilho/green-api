const axios = require('axios');
const User = require('../models/User');

const Mail = require('../../lib/Mail');

class UserController {
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

    const { email, password, admin } = req.body;

    const checkEmail = results
      .filter((el) => el.payer_email === email)
      .map((el) => el.payer_email)
      .toString();

    const findEmail = await User.findOne({
      where: { email: req.body.email },
    });

    const userNull = checkEmail && findEmail !== null;
    const emailExist = checkEmail === findEmail;
    const emailNull = !checkEmail && findEmail === null;
    const adminExist = admin;

    if (findEmail) {
      return res.status(400).json({
        error: 'User already exists.',
      });
    }

    if (adminExist) {
      const {
        name,
        email,
        password,
        admin,
        status_payment,
        plan_id,
      } = await User.create(req.body);

      await Mail.sendMail({
        to: `${name} <${email}>`,
        subject: `Welcome, ${name}, to Botanic Daily Data.`,
        template: 'welcome',
        context: {
          user: name,
          email: email,
          password: password,
        },
      });

      return res.json({
        name,
        email,
        password,
        admin,
        status_payment,
        plan_id,
      });
    }

    if (userNull || emailExist || emailNull) {
      return res.status(400).json({
        error: 'Ops! Something was wrong.',
      });
    }

    const filterResult = results.filter((el) => el.payer_email === email);
    const statusValue = filterResult.map((el) => el.status).toString();
    const nameValue = filterResult.map((el) => el.payer_first_name).toString();
    const planID = filterResult.map((el) => el.preapproval_plan_id).toString();

    const saveData = await User.create({
      email: checkEmail,
      status_payment: statusValue,
      plan_id: planID,
      name: nameValue,
      password,
    });

    await Mail.sendMail({
      to: `${nameValue} <${checkEmail}>`,
      subject: `Welcome, ${nameValue}, to Botanic Daily Data.`,
      template: 'welcome',
      context: {
        user: nameValue,
        email: checkEmail,
        password: password,
      },
    });

    return res.json({
      id: saveData.id,
      email: checkEmail,
      name: nameValue,
      status_payment: statusValue,
      plan_id: planID,
      admin: saveData.admin,
    });
  }

  async index(req, res) {
    const greenItem = await User.findAll({
      where: { id: req.userId },
    });

    if (greenItem === null) {
      res.json({ error: 'User not found.' });
    } else {
      res.json(greenItem);
    }
  }

  async indexAll(req, res) {
    const findUser = await User.findAll();

    res.json(findUser);
  }

  async delete(req, res) {
    const userDelete = await User.findOne({
      where: { email: req.params.email },
    });

    await userDelete.destroy();

    return res.json(userDelete);
  }

  async update(req, res) {
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email && email !== user.email) {
      const userExists = await User.findOne({
        where: {
          email,
        },
      });

      if (userExists) {
        return res.status(400).json({
          error: 'User already exists.',
        });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match.' });
    }

    const { id, name } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }
}

module.exports = new UserController();
