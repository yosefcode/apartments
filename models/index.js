const mongoose = require("mongoose");
const apartmentSchema = require("./ApartmentSchema");
const messagesSchema = require("./messages");

// שליחה לDB מקומי
// function connectToDb() {
//   return mongoose.connect("mongodb://localhost/a", {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//   });
// }

// שליחה לDB אטלס
function connectToDb() {
  return mongoose.connect(
    // "mongodb+srv://dbshop:GKSiW8g4jXqkxKt@cluster0.zq2sn.mongodb.net/dbshop?retryWrites=true&w=majority"
    process.env.DB_URL,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }
  );
}

const models = { messagesSchema, apartmentSchema };

module.exports = { connectToDb, models };
