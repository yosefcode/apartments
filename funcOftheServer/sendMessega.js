const { models } = require("../models");
var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");
const dotenv = require("dotenv");

dotenv.config();

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

exports.sendMessage = async function (req, res) {
  const newMessage = new models.messagesSchema({
    nameUser: req.body.nameUser,
    nameApartment: req.body.nameApartment,
    mailUser: req.body.phoneMailUser,
    mailApartment: req.body.mailApartment,
    message: req.body.message,
    uidFirebase: req.body.uidFirebase,
  });
  try {
    await newMessage.save();
  } catch (err) {
    res.status(500).send(err);
  }

  var mailOptions = {
    from: process.env.GOOGLE_MAIL,
    to: req.body.mailApartment,
    bcc: process.env.GOOGLE_MAIL,
    subject: `הודעה מאת ${
      req.body.nameUser || req.body.phoneMailUser
    } מתעניין לגבי הדירת נופש "${req.body.nameApartment}"`,
    text: `שם: ${
      req.body.nameUser ? req.body.nameUser : "לא צוין"
    } \nפרטי חזרה לפונה: ${req.body.phoneMailUser} \nהודעה: ${
      req.body.message
    }`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

// app.post("/api/newsletter/", function (req, res) {
//   var mailOptions = {
//     to: process.env.GOOGLE_MAIL,
//     subject: "רשימת תפוצה - כספומט",
//     text: `שם: ${req.body.name} \nטלפון: ${req.body.email}`,
//   };

//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Email sent: " + info.response);
//     }
//   });
// });
