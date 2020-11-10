const Img = require('../models/Img');

class ImgController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await Img.create({
      name,
      path,
    });

    return res.json(file);
  }
}

module.exports = new ImgController();
