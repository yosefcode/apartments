import "./jerusalem.css";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
function Jerusalem() {
  const product = {};

  // export default function DialogSelect() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState([]);

  const handleChange = (event) => {
    console.log("aaaaaaaa");
    product.image = event.target.value;
    setAge([event.target.value, ...age]);
  };
  console.log(age);
  console.log(product);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const area = [
    { area: "צפון" },
    { area: "דרום" },
    { area: "מרכז" },
    { area: "ירושלים" },
  ];
  const cityn = ["רמת הגולן", "מירון", "טבריה", "צפת"];
  const cityj = ["ביתר", "תל ציון", "בית שמש", "ירושלים"];
  const cityc = ["פתח תקווה", "ראשון לציון", "תל אביב", "בני ברק"];
  const rooms = [5, 6, 7, 8, 9, 10, 11, 12];

  const options = [
    {
      // TrucksTypes: "jjjjjjjjj",
      TrucksTypes: ["Citroen", "Fiat", "Ferrari", "Dodge"],
    },
    { TrucksTypes: ["Citroen", "Fiat", "Ferrari", "Dodge"] },
    { TrucksTypes: ["Citroen", "Fiat", "Ferrari", "Dodge"] },
    {
      Contractors: ["A", "B", "C", "D"],
      Customers: ["avraham", "ytzchak", "yaakov", "yosef"],
      Origins: ["#", "$", "%", "&"],
      Destinations: ["#", "$", "%", "&"],
      Cities: ["Jerusalem", "TelAviv", "Hayfa", "Ashdod"],
    },
  ];

  // for (var i = 0; i < area.length; i++) {
  //   const aaa = area[i]
  //   console.log(area[i]);
  //   //Do something
  // }

  return (
    <div>
      <select
        onChange={(event) => {
          console.log("aaaaaaaa");
          product.image = event.target.value;
          setAge([event.target.value, ...age]);
          console.log(product);
        }}
      >
        {/* <select value={""} onChange={(e) => (product.image = e.target.value)}> */}
        {area.map((fbb) => (
          <option value={fbb.area}>{fbb.area} </option>
        ))}
      </select>
      <input
        id="image"
        type="text"
        onChange={(e) => {
          product.image = e.target.value;
        }}
        placeholder="image"
      />
      <input
        id="title"
        type="text"
        onChange={(e) => (product.title = e.target.value)}
        placeholder="title"
      />{" "}
      <br />
      {/* <Button onClick={handleClickOpen}>Open select dialog</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Age</InputLabel>
              <Select
                native
                value={age}
                onChange={handleChange}
                input={<Input id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value={JSON.stringify({ aaa: 10 })}>Ten</option>
                <option value={{ aaa: 20 }}>Twenty</option>
                <option value={{ aaa: 30 }}>Thirty</option>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-dialog-select-label">Age</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={age}
                onChange={handleChange}
                input={<Input />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={40}>aaaa</MenuItem>
                <MenuItem value={50}>ssss</MenuItem>
                <MenuItem value={60}>dddd</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog> */}
    </div>
  );
}
// }

export default Jerusalem;
