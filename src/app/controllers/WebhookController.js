const Webhook = require('../models/Webhook');

class WebhookController {
  async index(req, res) {
    const allWebhook = await Webhook.findAll();

    return res.json(allWebhook);
  }

  async store(req, res) {
    const {
      action,
      api_version,
      application_id,
      date_created,
      id,
      live_mode,
      type,
      user_id,
    } = req.body;

    const addWebhook = await Webhook.create({
      action,
      api_version,
      application_id,
      date_created,
      id,
      live_mode,
      type,
      user_id,
    });

    return res.json(addWebhook);
  }

  // async delete(req, res) {
  //   const WebhookDelete = await Webhook.findByPk(req.params.id);

  //   await WebhookDelete.destroy();

  //   return res.json(WebhookDelete);
  // }

  // async update(req, res) {
  //   const WebhookEdit = await Webhook.findByPk(req.params.id);

  //   await WebhookEdit.update(req.body);

  //   return res.json(WebhookEdit);
  // }
}

module.exports = new WebhookController();
