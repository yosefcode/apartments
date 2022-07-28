const { models } = require("../models");

exports.editSearchApartment = async (req, res) => {
  const apartmentId = req.params.id;
  let updateValues = { $set: {} };
  if (req.body.model) updateValues.$set["model"] = req.body.model;
  if (req.body.area) updateValues.$set["area"] = req.body.area;
  if (req.body.city) updateValues.$set["city"] = req.body.city;
  if (req.body.rooms) updateValues.$set["rooms"] = req.body.rooms;
  if (req.body.beds) updateValues.$set["beds"] = req.body.beds;
  if (req.body.price) updateValues.$set["price"] = req.body.price;
  if (req.body.long) updateValues.$set["long"] = req.body.long;
  if (req.body.areaChange)
    updateValues.$set["areaChange"] = req.body.areaChange;
  if (req.body.cityChange)
    updateValues.$set["cityChange"] = req.body.cityChange;
  if (req.body.roomsChange)
    updateValues.$set["roomsChange"] = req.body.roomsChange;
  if (req.body.bedsChange)
    updateValues.$set["bedsChange"] = req.body.bedsChange;
  if (req.body.longChange)
    updateValues.$set["longChange"] = req.body.longChange;
  if (req.body.name) updateValues.$set["name"] = req.body.name;
  if (req.body.mail) updateValues.$set["mail"] = req.body.mail;
  if (req.body.phone) updateValues.$set["phone"] = req.body.phone;
  if (req.body.dateBusy) updateValues.$set["dateBusy"] = req.body.dateBusy;

  try {
    await models.searchApartmentSchema.findByIdAndUpdate(
      apartmentId,
      updateValues
    );
    res.status(200).send(console.log("change"));
  } catch (err) {
    res.status(500).send(err);
  }
};
