import "./‏specialApartment.css";
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

function SpecialApartment({ id, setApartment, apartment }) {
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
      <input
        placeholder="תיאור קצר"
        type="text"
        name="short"
        onChange={onchange}
      />
      <input
        placeholder="תיאור ארוך"
        type="text"
        name="long"
        onChange={onchange}
      />
      <input
        placeholder="יתרונות"
        type="text"
        name="special"
        onChange={onchange}
      />
    </div>
  );
}

export default SpecialApartment;
