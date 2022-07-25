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

exports.deleteSearchApartment = async (req, res) => {
  const myPostSearchId = req.params.id;
  await models.searchApartmentSchema.findByIdAndDelete({
    _id: myPostSearchId,
  });
  try {
    res.status(200).send(myPostSearchId);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.holdSearchApartment = async (req, res) => {
  const myPostSearchId = req.params.id;
  try {
    await models.searchApartmentSchema.findOneAndUpdate(
      { _id: myPostSearchId },
      [{ $set: { show: req.body.show } }]
    );
    res.status(200).send(console.log("change"));
  } catch (err) {
    res.status(500).send(err);
  }
};
