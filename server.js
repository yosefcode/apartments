const fs = require("fs");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");
const app = express();
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const dotenv = require("dotenv");

dotenv.config();
app.use(express.static(path.join(__dirname, "build")));

const PORT = process.env.PORT || 4200;

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// app.get("/list", (req, res) => {
//   fs.readFile("products.json", (err, data) => {
//     const list = JSON.parse(data);
//     res.send(list);
//   });
// });

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

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
