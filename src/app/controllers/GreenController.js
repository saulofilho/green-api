const Green = require('../models/Green');

class GreenController {
  async index(req, res) {
    const ProjectItem = await Green.findByPk(req.params.id);

    if (ProjectItem === null) {
      res.json({ error: 'Data not found!' });
    } else {
      res.json(ProjectItem);
    }
  }

  async store(req, res) {
    const {
      project_id,
      ph_water,
      ph_soil,
      ec,
      temp_max,
      temp_min,
      moisture,
      air_humidity,
      infos,
      img_id,
      id,
      phase,
      plant_size,
    } = req.body;

    const addGreen = await Green.create({
      user_id: req.userId,
      project_id,
      ph_water,
      ph_soil,
      ec,
      temp_max,
      temp_min,
      moisture,
      air_humidity,
      infos,
      img_id,
      id,
      phase,
      plant_size,
    });

    return res.json(addGreen);
  }

  async update(req, res) {
    const greenEdit = await Green.findByPk(req.params.id);

    await greenEdit.update(req.body);

    return res.json(greenEdit);
  }
}

module.exports = new GreenController();
