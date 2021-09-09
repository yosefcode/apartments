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

// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

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

// app.post("/api/sendemail/", (req, res) => {
//   fs.readFile("products.json", (err, data) => {
//     const products = JSON.parse(data);
//     var name = req.body.name;
//     var email = req.body.email;
//     var subject = req.body.subject;
//     var message = req.body.message;
//     products.push({
//       id: products.length + 1,
//       name: name,
//       email: email,
//       subject: subject,
//       message: message,
//     });
//     fs.writeFile("products.json", JSON.stringify(products), (err) => {
//       res.send(products);
//     });
//   });
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

app.post("/api/send-mail/", function (req, res) {
  var mailOptions = {
    to: process.env.GOOGLE_MAIL,
    subject: "הודעה מכספומט",
    text: `שם: ${req.body.name} \nמייל: ${req.body.email} \nהודעה: ${req.body.message}`,
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
    text: `שם: ${req.body.name} \nמייל: ${req.body.email}`,
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
