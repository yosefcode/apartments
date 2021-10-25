import "./contact.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  parsePhoneNumber,
  AsYouType,
  findPhoneNumbersInText,
} from "libphonenumber-js";

function Contact({ id, setApartment, apartment }) {
  const onchange = (e) => {
    setApartment({
      ...apartment,
      uidFirebase: id,
      show: true,
      [e.target.name]: e.target.value,
    });
  };

  localStorage.setItem(
    `addApartment`,
    JSON.stringify([
      // ...(JSON.parse(localStorage.getItem(`favorite`)) || []),
      apartment,
    ])
  );

  console.log(apartment);

  return (
    <div className="addApartment">
      <Box>
        <TextField
          id="outlined-basic"
          label="שם איש הקשר"
          variant="outlined"
          name="name"
          onChange={onchange}
        />{" "}
      </Box>
      <Box>
        <TextField
          id="outlined-basic"
          label="מייל"
          variant="outlined"
          name="mail"
          onChange={onchange}
        />{" "}
      </Box>
      <Box>
        <TextField
          id="outlined-basic"
          label="טלפון"
          variant="outlined"
          name="phone"
          // onChange={onchange}
          onChange={(e) => {
            setApartment({
              ...apartment,
              [e.target.name]:
                e.target.value.length > 7
                  ? parsePhoneNumber(e.target.value, "IL").formatNational()
                  : "",
            });
          }}
        />
      </Box>
    </div>
  );
}

export default Contact;
