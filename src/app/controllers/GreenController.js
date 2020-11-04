const Green = require('../models/Green');

class GreenController {
  async indexAll(req, res) {
    const dataGreen = await Green.findAll();

    res.json(dataGreen);
  }

  async index(req, res) {
    const { date } = req.query;

    const greenItem = await Green.findOne({ where: { date: date } });

    if (greenItem === null) {
      res.json({ error: 'Green not found!' });
    } else {
      res.json(greenItem);
    }
  }

  async store(req, res) {
    const { ph, ec, temp_max, temp_min, moisture, infos, date } = req.body;

    const addGreen = await Green.create({
      user_id: req.userId,
      ph,
      ec,
      temp_max,
      temp_min,
      moisture,
      infos,
      date,
    });

    return res.json(addGreen);
  }

  async delete(req, res) {
    const green = await Green.findByPk(req.params.id);

    await green.destroy();

    return res.json(green);
  }

  async update(req, res) {
    const { ph, ec, temp_max, temp_min, moisture, infos, date } = req.body;

    const greenEdit = await Green.findOne({ where: { green: req.body.green } });

    if (greenEdit === null) {
      res.json({ error: 'Green not found!' });
    } else {
      const greenEdit = await Green.update(
        {
          ph,
          ec,
          temp_max,
          temp_min,
          moisture,
          infos,
          date,
        },
        {
          where: {
            date,
          },
        }
      );
      console.log(greenEdit instanceof Green);
      console.log(greenEdit.green);
    }

    return res.json({
      ph,
      ec,
      temp_max,
      temp_min,
      moisture,
      infos,
      date,
    });
  }
}

module.exports = new GreenController();
