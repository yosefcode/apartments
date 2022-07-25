const { models } = require("../models");

exports.searchApartment = async (req, res) => {
  const newSearchApartment = new models.searchApartmentSchema({
    uidFirebase: req.body.uidFirebase,
    show: req.body.show,
    model: req.body.model,
    area: req.body.area,
    city: req.body.city,
    rooms: req.body.rooms,
    beds: req.body.beds,
    price: req.body.price,
    long: req.body.long,
    areaChange: req.body.areaChange,
    cityChange: req.body.cityChange,
    roomsChange: req.body.roomsChange,
    bedsChange: req.body.bedsChange,
    longChange: req.body.longChange,
    name: req.body.name,
    mail: req.body.mail,
    phone: req.body.phone,
    dateBusy: req.body.dateBusy,
  });
  try {
    await newSearchApartment.save();
    res.send(newSearchApartment);
    console.log("add");
  } catch (err) {
    res.status(500).send(err);
  }
};
