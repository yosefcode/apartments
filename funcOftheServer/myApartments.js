const { models } = require("../models");

exports.myApartments = async (req, res) => {
  const productId = req.params.id;
  const products = await models.apartmentSchema.find({
    uidFirebase: productId,
  });
  try {
    res.send(products);
  } catch (err) {
    res.status(500).send(err);
  }
};
