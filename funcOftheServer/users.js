const { models } = require("../models");

exports.addUser = async (req, res) => {
  console.log("req.body", req.body);
  const newUser = new models.usersSchema({
    uidFirebase: req.body.uidFirebase,
    nameUser: req.body.nameUser,
    mailUser: req.body.mailUser,
    phoneUser: req.body.phoneUser,
    isAgree: req.body.isAgree,
    receivingMessages: req.body.receivingMessages,
    receivingWTS: req.body.receivingWTS,
    msgSearchApartment: req.body.msgSearchApartment,
    citiesSearchApartment: req.body.citiesSearchApartment,
    msgSaleApartment: req.body.msgSaleApartment,
    citiesSaleApartment: req.body.citiesSaleApartment,
  });
  try {
    await newUser.save();
    res.send(newUser);
    console.log("addnewUser");
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.listUsers = async (req, res) => {
  const listUsers = await models.usersSchema.find();
  try {
    res.send(listUsers);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.userConnected = async (req, res) => {
  const userId = req.params.id;
  const userConnected = await models.usersSchema.find({
    uidFirebase: userId,
  });
  try {
    res.send(userConnected);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.editUser = async (req, res) => {
  const userId = req.params.id;
  let updateValues = { $set: {} };
  if (req.body.uidFirebase)
    updateValues.$set["uidFirebase"] = req.body.uidFirebase;

  if (req.body.nameUser) updateValues.$set["nameUser"] = req.body.nameUser;
  if (req.body.mailUser) updateValues.$set["mailUser"] = req.body.mailUser;
  if (req.body.phoneUser) updateValues.$set["phoneUser"] = req.body.phoneUser;

  if (req.body.receivingMessages)
    updateValues.$set["receivingMessages"] = req.body.receivingMessages;
  else updateValues.$set["receivingMessages"] = false;
  if (req.body.receivingWTS)
    updateValues.$set["receivingWTS"] = req.body.receivingWTS;
  else updateValues.$set["receivingWTS"] = false;

  if (req.body.msgSearchApartment)
    updateValues.$set["msgSearchApartment"] = req.body.msgSearchApartment;
  else updateValues.$set["msgSearchApartment"] = false;
  if (req.body.citiesSearchApartment)
    updateValues.$set["citiesSearchApartment"] = req.body.citiesSearchApartment;
  else updateValues.$set["citiesSearchApartment"] = "";
  if (req.body.msgSaleApartment)
    updateValues.$set["msgSaleApartment"] = req.body.msgSaleApartment;
  else updateValues.$set["msgSaleApartment"] = false;
  if (req.body.citiesSaleApartment)
    updateValues.$set["citiesSaleApartment"] = req.body.citiesSaleApartment;
  else updateValues.$set["citiesSaleApartment"] = "";

  try {
    await models.usersSchema.findByIdAndUpdate(userId, updateValues),
      res.status(200).send(console.log(updateValues));
  } catch (err) {
    res.status(500).send(err);
  }
};
