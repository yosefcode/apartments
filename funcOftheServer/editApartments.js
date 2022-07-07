const { models } = require("../models");

exports.editApartment = async (req, res) => {
  const apartmentId = req.params.id;
  let updateValues = { $set: {} };
  if (req.body.nameApartment)
    updateValues.$set["nameApartment"] = req.body.nameApartment;
  if (req.body.area) updateValues.$set["area"] = req.body.area;
  if (req.body.city) updateValues.$set["city"] = req.body.city;
  if (req.body.street) updateValues.$set["street"] = req.body.street;
  if (req.body.rooms) updateValues.$set["rooms"] = req.body.rooms;
  if (req.body.beds) updateValues.$set["beds"] = req.body.beds;
  if (req.body.priceMethod)
    updateValues.$set["priceMethod"] = req.body.priceMethod;
  if (req.body.price) updateValues.$set["price"] = req.body.price;
  if (req.body.short) updateValues.$set["short"] = req.body.short;
  if (req.body.long) updateValues.$set["long"] = req.body.long;
  if (req.body.special) updateValues.$set["special"] = req.body.special;
  if (req.body.times) updateValues.$set["times"] = req.body.times;
  if (req.body.webSite) updateValues.$set["webSite"] = req.body.webSite;
  if (req.body.images) updateValues.$set["images"] = req.body.images;
  if (req.body.name) updateValues.$set["name"] = req.body.name;
  if (req.body.mail) updateValues.$set["mail"] = req.body.mail;
  if (req.body.phone) updateValues.$set["phone"] = req.body.phone;

  try {
    await models.apartmentSchema.findByIdAndUpdate(apartmentId, updateValues);
    res.status(200).send(console.log("change"));
  } catch (err) {
    res.status(500).send(err);
  }
};
