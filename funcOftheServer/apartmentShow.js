const { models } = require("../models");

exports.apartmentShow = async (req, res) => {
  const productId = req.params.id;
  const products = await models.apartmentSchema.find({
    _id: productId,
  });
  try {
    res.send(products);
  } catch (err) {
    res.status(500).send(err);
  }
};
