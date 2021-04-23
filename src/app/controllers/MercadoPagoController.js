const axios = require('axios');
const MercadoPago = require('../models/MercadoPago');

class MercadoPagoController {
  async index(req, res) {
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
        console.log('apiResponse------->', response.data);
        return response;
      })
      .catch((err) => {
        console.log(err);
      });

    const { results } = apiResponse.data;

    // const allResultsStringify = JSON.stringify(results);

    const status = results.filter((item) => item.status === 'authorized');

    console.log('status-------->', status);
    return results;
  }

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
        console.log('apiResponse------->', response.data);
        return response;
      })
      .catch((err) => {
        console.log(err);
      });

    const { results } = apiResponse.data;

    // const status = results.filter((item) => item.status === 'authorized');

    const x = await MercadoPago.create(results.filter((item) => item.status));

    console.log('x------->', x);

    return res.json(x);
  }
}

module.exports = new MercadoPagoController();
