const { models } = require("../models");

exports.apartmentShow = async (req, res) => {
  const apartmentShowId = req.params.id;
  const apartmentShow = await models.apartmentSchema.find({
    _id: apartmentShowId,
  });
  try {
    res.send(apartmentShow);
  } catch (err) {
    res.status(500).send(err);
  }
};
