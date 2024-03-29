const axios = require('axios');
const Payments = require('../models/Payments');

class PaymentsController {
  async store(req, res) {
    const apiResponse = await axios
      .get(
        `https://api.mercadopago.com/preapproval/search?preapproval_plan_id=${process.env.PLAN_ID}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.YOUR_ACCESS_TOKEN}`,
          },
        }
      )
      .then((response) => {
        console.log('ok');
        return response.data;
      })
      .catch((err) => {
        console.log('not');
        console.log(err.message);
      });

    const { results } = apiResponse;

    console.log('results', results);

    const { email } = req.body;

    const checkEmail = results
      .filter((el) => el.payer_email === email)
      .map((el) => el.payer_email)
      .toString();

    if (checkEmail) {
      const filterResult = results.filter((el) => el.payer_email === email);
      const statusValue = filterResult.map((el) => el.status).toString();
      const planID = filterResult
        .map((el) => el.preapproval_plan_id)
        .toString();

      const saveData = await Payments.create({
        email: checkEmail,
        status_payment: statusValue,
        plan_id: planID,
      });

      return res.json(saveData);
    } else {
      res.json({ error: 'Ops!' });
    }
  }
}

module.exports = new PaymentsController();
