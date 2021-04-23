const express = require('express');
const app = express();
const mercadopago = require('mercadopago');

mercadopago.configurations.setAccessToken(process.env.YOUR_ACCESS_TOKEN);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const MercadoPago = require('../controllers/MercadoPagoController');

app.get('/', function (req, res) {
  res.status(200).send('ok');
});

// app.get('/', MercadoPago.index);
app.post('/mercadopago', MercadoPago.store);

app.post('/create_preference', (req, res) => {
  let preference = {
    items: [
      {
        title: req.body.description,
        unit_price: Number(req.body.price),
        quantity: Number(req.body.quantity),
      },
    ],
    back_urls: {
      success: 'http://localhost:8080/success',
      failure: 'http://localhost:8080/failure',
      pending: 'http://localhost:8080/pending',
    },
    auto_return: 'approved',
  };
  console.log('items-------->>>>', preference);

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json({ id: response.body.id });
      console.log('res-------->>>>', res);
    })
    .catch(function (error) {
      console.log('bahhh-------->>>>', error);
    });
});

app.get('/feedback', function (request, response) {
  response.json({
    Payment: request.query.payment_id,
    Status: request.query.status,
    MerchantOrder: request.query.merchant_order_id,
  });
});

app.listen(8080, () => {
  console.log('The Mercado Pago Server is now running on Port 8080');
});

// https://medium.com/integra%C3%A7%C3%A3o-de-pagamentos-com-mercado-pago-e-react/integra%C3%A7%C3%A3o-de-pagamentos-com-react-native-node-js-e-smartcheckout-do-mercado-pago-64eedbb0eae9
// https://www.luiztools.com.br/post/nodemail-envio-de-email-em-reactjs-nodejs-nodemailer/
// https://www.w3schools.com/nodejs/nodejs_email.asp
// https://forwardemail.net/pt?ref=nodemailer#learn-more
// https://stackoverflow.com/questions/5692960/node-js-create-a-web-hook
// https://github.com/aheckmann/node-email#readme
