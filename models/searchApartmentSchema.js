const mongoose = require("mongoose");

const searchApartmentSchema = new mongoose.Schema({
  show: String,
  model: String,
  name: String,
  rooms: Number,
  beds: Number,
  price: Number,
  area: String,
  city: Array,
  roomsChange: Number,
  bedsChange: Number,
  areaChange: String,
  cityChange: Array,
  phone: String,
  long: String,
  longChange: String,
  mail: String,
  uidFirebase: String,
  dateBusy: Array,
});

const searchApartment = mongoose.model(
  "searchApartment",
  searchApartmentSchema
);

module.exports = searchApartment;
