const mongoose = require("mongoose");
const apartmentSchema = require("./ApartmentSchema");
const messagesSchema = require("./messagesSchema");
const usersSchema = require("./usersSchema");
const searchApartmentSchema = require("./searchApartmentSchema");

function connectToDb() {
  return mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
}

const models = {
  messagesSchema,
  apartmentSchema,
  usersSchema,
  searchApartmentSchema,
};

module.exports = { connectToDb, models };
