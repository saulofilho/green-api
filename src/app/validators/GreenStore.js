const Yup = require('yup');

module.exports = async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      infos: Yup.string().required(),
      phase: Yup.string().required(),
      ph_water: Yup.number().required(),
      ph_soil: Yup.number().required(),
      ec: Yup.number().required(),
      temp_max: Yup.number().required(),
      temp_min: Yup.number().required(),
      air_humidity: Yup.number().required(),
      moisture: Yup.number().required(),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'Validation fails.', messages: err.inner });
  }
};
