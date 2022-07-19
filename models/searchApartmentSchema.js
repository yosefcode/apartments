const mongoose = require("mongoose");

const searchApartmentSchema = new mongoose.Schema({
  show: String,
  name: String,
  rooms: Number,
  beds: Number,
  price: Number,
  area: String,
  city: Array,
  phone: String,
  long: String,
  mail: String,
  uidFirebase: String,
  dateBusy: Array,
});

const searchApartment = mongoose.model(
  "searchApartment",
  searchApartmentSchema
);

module.exports = searchApartment;
