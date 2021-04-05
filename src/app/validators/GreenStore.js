const Yup = require('yup');

module.exports = async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      infos: Yup.string(),
      ph_water: Yup.number(),
      ph_soil: Yup.number(),
      ec: Yup.number(),
      temp_max: Yup.number(),
      temp_min: Yup.number(),
      moisture: Yup.number(),
      air_humidity: Yup.number(),
      plant_size: Yup.number(),
      phase: Yup.string(),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'Validation fails.', messages: err.inner });
  }
};
