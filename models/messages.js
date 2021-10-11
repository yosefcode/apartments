const mongoose = require("mongoose");

const MessagesSchema = new mongoose.Schema({
  nameUser: String,
  nameApartment: String,
  mailUser: String,
  mailApartment: String,
  message: String,
  date: {
    type: Date,
    default: Date.now(),
  },
  date1: {
    type: Date,
    default: new Date(),
  },
  date2: {
    type: Date,
    default: () => Date.now() + 3 * 60 * 60 * 1000,
  },
  date3: {
    type: Date,
    default: () => new Date() + 3 * 60 * 60 * 1000,
  },
  date4: { type: String, default: Date },
});

const Message = mongoose.model("Messages", MessagesSchema);

const product1 = new Message({
  nameUser: "String",
  nameApartment: "String",
  mailUser: "String",
  mailApartment: "String",
  message: "String",
});
const product2 = new Message({
  nameUser: "String",
  nameApartment: "String",
  mailUser: "String",
  mailApartment: "String",
  message: "String",
});
const product3 = new Message({
  nameUser: "String",
  nameApartment: "String",
  mailUser: "String",
  mailApartment: "String",
  message: "String",
});

// product1.save();
// product2.save();
// product3.save();

module.exports = Message;
