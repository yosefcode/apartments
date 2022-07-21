const fs = require("fs");
const cors = require("cors");
const express = require("express");
const app = express();
const path = require("path");
const { connectToDb, models } = require("./models");
const messages = require("./funcOftheServer/messages");
const listApartments = require("./funcOftheServer/listApartments");
const sendMessage = require("./funcOftheServer/sendMessega");
const listApartmentsForDeleteHold = require("./funcOftheServer/listApartmentsForDeleteHold");
const apartmentShow = require("./funcOftheServer/apartmentShow");
const addApartment = require("./funcOftheServer/addApartment");
const editApartment = require("./funcOftheServer/editApartments");
const users = require("./funcOftheServer/users");
const searchApartment = require("./funcOftheServer/searchApartment");
const listPostSearchForDeleteHold = require("./funcOftheServer/listPostSearchForDeleteHold");

app.use(cors());
app.use(express.json());

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

app.get("/user/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});
app.get("/manager/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});
app.get("/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.post("/api/list/filter/", listApartments.filterOfList);
app.get("/api/list/", listApartments.list);

app.post("/api/messages/", messages.allMessage);
app.post("/api/messages/:id", messages.messageFromUID);

app.post(
  "/api/allApartmentsForEditDelete/",
  listApartmentsForDeleteHold.listApartmentsForEditDelete
);
app.post(
  "/api/myApartments/:id",
  listApartmentsForDeleteHold.listApartmentsForEditDelete
);
app.delete(
  `/api/deleteApartment/:id`,
  listApartmentsForDeleteHold.deleteApartment
);
app.put(`/api/holdApartment/:id`, listApartmentsForDeleteHold.holdApartment);

app.put(`/api/editApartment/:id`, editApartment.editApartment);

app.post("/api/apartmentShow/:id", apartmentShow.apartmentShow);

app.post("/api/sendMessageForApartment/", sendMessage.sendMessage);

app.post("/api/addApartment/", addApartment.addApartment);

app.post("/api/searchApartment/", searchApartment.searchApartment);
app.post(
  "/api/mylistPostSearch/:id",
  listPostSearchForDeleteHold.listPostSearch
);
// app.delete(
//   `/api/deleteApartment/:id`,
//   listApartmentsForDeleteHold.deleteApartment
// );
// app.put(`/api/holdApartment/:id`, listApartmentsForDeleteHold.holdApartment);

app.post("/api/addUser/", users.addUser);
app.get("/api/listUsers/", users.listUsers);
app.post("/api/userConnected/:id", users.userConnected);
app.put("/api/editUser/:id", users.editUser);
