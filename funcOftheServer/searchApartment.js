const { models } = require("../models");

exports.searchApartment = async (req, res) => {
  const newSearchApartment = new models.searchApartmentSchema({
    uidFirebase: req.body.uidFirebase,
    show: req.body.show,
    area: req.body.area,
    city: req.body.city,
    rooms: req.body.rooms,
    beds: req.body.beds,
    price: req.body.price,
    long: req.body.long,
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
