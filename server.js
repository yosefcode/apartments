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
// title: req.body.title

app.post("/api/list/filter/", async (req, res) => {
  const search = {
    area: req.body.area,
    // city: req.body.city,
    rooms: req.body.rooms,
  };
  // const search = req.query.search;
  const productsSearch = await models.apartmentSchema.find(search);

  try {
    console.log(search);
    res.send(productsSearch);
    // console.log("productsSearch :", productsSearch);
    // });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/api/list/", async (req, res) => {
  const products = await models.apartmentSchema.find();
  try {
    res.send(products);
    // console.log("productsSearch :", productsSearch);
    // });
  } catch (err) {
    res.status(500).send(err);
  }
});

//     // console.log("req.body : ", search.area);
//     console.log("apartments :", search.rooms);
//     const apartments = await models.apartmentSchema
//       .find
//       // area: "center",
//       // city: "בני ברק",
//       // rooms: 5,
//       // search,
//       ();
//     console.log("sss", JSON.stringify(search));

//     // const search = req.query.search;

//     try {
//       if (search) {
//         const productsSearch = await models.apartmentSchema.find(
//           search
//           // area: { $regex: search, $options: "i" },
//           // rooms: { $regex: search, $options: "i" },
//           // $apartments: {
//           // items: {
//           // $filter: {
//           //   input: "$apartments",
//           //   as: "item",
//           //   cond: { $gte: ["$$item.price", 100] },
//           // },
//           // },
//           //  }
//         );
//         res.send(productsSearch);
//         console.log("productsSearch :", productsSearch);
//       } else {
//         res.status(200).send(apartments);
//         console.log("get");
//       }
//     } catch (err) {
//       res.status(500).send(err);
//     }
//   });
// });

// app.post(`/api/list/`, (req, res) => {
//   const newproduct = {
//     area: req.body.area,
//     // city: req.body.city,
//     // rooms: req.body.rooms,
//   };
//   console.log(newproduct.area);

//   console.log("add");
//   try {
//     // const asas = res.send(newproduct);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// app.get("/api/list/", async (req, res) => {
//   const apartments = await models.apartmentSchema.find();
//   const search = req.query.search;

//   // console.log(JSON.stringify(search));
//   // console.log(search);
//   try {
//     if (newproduct) {
//       const productsSearch = await models.apartmentSchema.find({
//         area: { $regex: newproduct, $options: "i" },
//       });
//       res.send(productsSearch);
//     } else {
//       res.status(200).send(apartments);
//       console.log("get");
//     }
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// app.get("/api/list/jerusalem/", async (req, res) => {
//   const apartments = await models.apartmentSchema.find({
//     area: { $regex: "jerusalem", $options: "i" },
//   });
//   try {
//     res.status(200).send(apartments);
//     console.log("get");
//   } catch (err) {
//     res.status(500).send(err);
//   }
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

// app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
