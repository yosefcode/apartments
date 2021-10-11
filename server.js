const fs = require("fs");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");
const app = express();
const path = require("path");
const { connectToDb, models } = require("./models");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const dotenv = require("dotenv");

dotenv.config();
// app.use(express.static(path.join(__dirname, "build")));
app.use(express.static(path.join(__dirname, "client/build")));

const PORT = process.env.PORT || 7000;

connectToDb().then(async () => {
  app.listen(PORT, () => {
    console.log("Server is running port ", PORT);
  });
});

app.get("/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.post("/api/list/filter/", async (req, res) => {
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
});

app.get("/api/list/", async (req, res) => {
  const products = await models.apartmentSchema.find();
  try {
    res.send(products);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/api/list/:id", async (req, res) => {
  const productId = req.params.id;
  const products = await models.apartmentSchema.find({
    _id: productId,
  });
  try {
    res.send(products);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/api/messages/", async (req, res) => {
  const message = await models.messagesSchema.find();
  try {
    res.send(message);
  } catch (err) {
    res.status(500).send(err);
  }
});

// app.post(URL, async (req, res) => {
//   const newproduct = new models.messagesSchema({
//     title: req.body.title || "הכנס שם מוצר",
//     quantity: +req.body.quantity || 0,
//     image: req.body.image || imgerr,
//     price: +req.body.price || 0,
//     items: 0,
//   });
//   console.log("add");
//   try {
//     await newproduct.save();
//     res.send(newproduct);
//     io.emit("AddProduct");
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

let transporter = nodemailer.createTransport(
  smtpTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: false,
    port: 25,
    auth: {
      user: process.env.GOOGLE_MAIL,
      pass: process.env.GOOGLE_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  })
);

app.post("/api/sendMessageForApartment/", async function (req, res) {
  const newMessage = new models.messagesSchema({
    nameUser: req.body.name,
    nameApartment: req.body.nameApartment,
    mailUser: req.body.phone,
    mailApartment: req.body.mail,
    message: req.body.message,
    // date: Date.now(),
  });
  try {
    await newMessage.save();
  } catch (err) {
    res.status(500).send(err);
  }

  var mailOptions = {
    from: process.env.GOOGLE_MAIL,
    to: req.body.mail,
    bcc: process.env.GOOGLE_MAIL,
    subject: `הודעה מאת ${
      req.body.name || req.body.phone
    } מתעניין לגבי הדירת נופש "${req.body.nameApartment}"`,
    text: `שם: ${req.body.name ? req.body.name : "לא צוין"} \nטלפון: ${
      req.body.phone
    } \nהודעה: ${req.body.message}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

app.post("/api/newsletter/", function (req, res) {
  var mailOptions = {
    to: process.env.GOOGLE_MAIL,
    subject: "רשימת תפוצה - כספומט",
    text: `שם: ${req.body.name} \nטלפון: ${req.body.email}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

// app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
