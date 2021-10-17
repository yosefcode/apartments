const { models } = require("../models");

exports.filterOfList = async (req, res) => {
  const { area, city, rooms } = req.body;
  const filter = {};

  if (area) {
    filter.area = area;
  }
  if (city) {
    filter.city = city;
  }
  if (rooms) {
    filter.rooms = rooms;
  }

  const apartmentFilter = await models.apartmentSchema.find(filter);

  try {
    res.send(apartmentFilter);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.list = async (req, res) => {
  const listApartments = await models.apartmentSchema.find();
  try {
    res.send(listApartments);
  } catch (err) {
    res.status(500).send(err);
  }
};
