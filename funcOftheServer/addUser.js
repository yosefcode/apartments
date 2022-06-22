const { models } = require("../models");

exports.addUser = async (req, res) => {
  const newUser = new models.usersSchema({
    uidFirebase: req.body.uidFirebase,
    nameUser: req.body.nameUser,
    mailUser: req.body.mailUser,
    phoneUser: req.body.phoneUser,
    isAgree: req.body.isAgree,
    receivingMessages: req.body.receivingMessages,
    receivingWTS: req.body.receivingWTS,
    msgSearchApartment: req.body.msgSearchApartment,
    areaSearchApartment: req.body.areaSearchApartment,
    msgSaleApartment: req.body.msgSaleApartment,
    areaSaleApartment: req.body.areaSaleApartment,
  });
  try {
    await newUser.save();
    res.send(newUser);
    console.log("addnewUser");
  } catch (err) {
    res.status(500).send(err);
  }
};
