const mongoose = require("mongoose");

const MessagesSchema = new mongoose.Schema({
  nameUser: String,
  nameApartment: String,
  mailUser: String,
  mailApartment: String,
  message: String,
  uidFirebase: String,
  date: { type: String, default: Date },
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
