const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  nameUser: String,
  mailUser: String,
  phoneUser: String,
  isAgree: Boolean,
  receivingMessages: Boolean,
  receivingWTS: Boolean,
  msgSearchApartment: Boolean,
  areaSearchApartment: String,
  msgSaleApartment: Boolean,
  areaSaleApartment: String,
  uidFirebase: String,
  date: { type: String, default: Date },
});

const Users = mongoose.model("Users", UsersSchema);

// const product1 = new Message({
//   nameUser: "String",
//   nameApartment: "String",
//   mailUser: "String",
//   mailApartment: "String",
//   message: "String",
// });
// const product2 = new Message({
//   nameUser: "String",
//   nameApartment: "String",
//   mailUser: "String",
//   mailApartment: "String",
//   message: "String",
// });
// const product3 = new Message({
//   nameUser: "String",
//   nameApartment: "String",
//   mailUser: "String",
//   mailApartment: "String",
//   message: "String",
// });

// product1.save();
// product2.save();
// product3.save();

module.exports = Users;
