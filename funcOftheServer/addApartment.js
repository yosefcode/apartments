const { models } = require("../models");

exports.addApartment = async (req, res) => {
  const newApartment = new models.apartmentSchema({
    uidFirebase: req.body.uidFirebase,
    show: req.body.show,
    nameApartment: req.body.nameApartment,
    area: req.body.area,
    city: req.body.city,
    rooms: req.body.rooms,
    beds: req.body.beds,
    price: req.body.price,
    priceMethod: req.body.priceMethod,
    short: req.body.short,
    long: req.body.long,
    special: req.body.special,
    name: req.body.name,
    mail: req.body.mail,
    phone: req.body.phone,
  });
  try {
    await newApartment.save();
    res.send(newApartment);
    console.log("add");
  } catch (err) {
    res.status(500).send(err);
  }
};