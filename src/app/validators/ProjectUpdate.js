const Yup = require('yup');

module.exports = async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      harvest_name: Yup.string().required(),
      strain_name: Yup.string().required(),
      breeder: Yup.string().required(),
      flowering_type: Yup.string().required(),
      infos: Yup.string().required(),
      tools: Yup.string().required(),
      nutrients: Yup.string().required(),
      soil: Yup.string().required(),
      pot_size: Yup.string().required(),
      light_schedule: Yup.string().required(),
      grow_techniques: Yup.string().required(),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'Validation fails.', messages: err.inner });
  }
};
