const { models } = require("../models");

exports.myApartments = async (req, res) => {
  const myApartmentsId = req.params.id;
  const myApartments = await models.apartmentSchema.find({
    uidFirebase: myApartmentsId,
  });
  try {
    res.send(myApartments);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteApartment = async (req, res) => {
  const apartmentShowId = req.params.id;
  await models.apartmentSchema.findByIdAndDelete({
    _id: apartmentShowId,
  });
  try {
    res.status(200).send(apartmentShowId);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.holdApartment = async (req, res) => {
  const apartmentShowId = req.params.id;
  try {
    await models.apartmentSchema.findOneAndUpdate({ _id: apartmentShowId }, [
      { $set: { show: { $eq: [false, "$show"] } } },
    ]);
    res.status(200).send(console.log("change"));
  } catch (err) {
    res.status(500).send(err);
  }
};
