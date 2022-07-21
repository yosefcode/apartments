const { models } = require("../models");

exports.listPostSearch = async (req, res) => {
  const myPostSearchId = req.params?.id;
  const myPostSearch = myPostSearchId
    ? await models.searchApartmentSchema.find({
        uidFirebase: myPostSearchId,
      })
    : await models.searchApartmentSchema.find();
  try {
    res.send(myPostSearch);
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
      { $set: { show: req.body.show } },
    ]);
    res.status(200).send(console.log("change"));
  } catch (err) {
    res.status(500).send(err);
  }
};
