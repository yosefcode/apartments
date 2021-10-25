import "./detailsApartment.css";
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

function DetailsApartment({ id, setApartment, apartment, onchange }) {
  const [aaa, setaaa] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://data.gov.il/dataset/citiesandsettelments/resource/72bd51be-512b-4430-b2d2-f3295c90e569/download/72bd51be-512b-4430-b2d2-f3295c90e569.xml"
      )
      .then((res) => {
        setaaa(res.data);
      });
  }, []);

  // console.log(aaa);

  // const onchange = (e) => {
  //   setApartment({
  //     ...apartment,
  //     uidFirebase: id,
  //     show: true,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // localStorage.setItem(
  //   `addApartment`,
  //   JSON.stringify([
  //     // ...(JSON.parse(localStorage.getItem(`favorite`)) || []),
  //     apartment,
  //   ])
  // );

  // console.log(apartment);

  return (
    <div className="addApartment">
      <Box>
        <TextField
          id="outlined-basic"
          label="שם הנכס"
          variant="outlined"
          name="nameApartment"
          onChange={onchange}
        />
      </Box>
      <Box>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">בחר איזור בארץ</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="בחר איזור בארץ"
            name="area"
            onChange={onchange}
          >
            <MenuItem value={"ירושלים"}>ירושלים</MenuItem>
            <MenuItem value={"דרום"}>הדרום</MenuItem>
            <MenuItem value={"מרכז"}>המרכז</MenuItem>
            <MenuItem value={"צפון"}>הצפון</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">בחר עיר</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="בחר עיר"
            name="city"
            onChange={onchange}
          >
            <MenuItem value={"ירושלים"}>ירושלים</MenuItem>
            <MenuItem value={"דרום"}>הדרום</MenuItem>
            <MenuItem value={"מרכז"}>המרכז</MenuItem>
            <MenuItem value={"צפון"}>הצפון</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <TextField
          id="outlined-basic"
          label="מס' חדרים"
          variant="outlined"
          name="rooms"
          onChange={onchange}
        />
      </Box>
      <Box>
        <TextField
          id="outlined-basic"
          label="מס' מיטות"
          variant="outlined"
          name="beds"
          onChange={onchange}
        />{" "}
      </Box>
      <Box>
        <TextField
          id="outlined-basic"
          label="מחיר"
          variant="outlined"
          name="price"
          onChange={onchange}
        />{" "}
      </Box>
      <Box>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">תמחור לפי</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="תמחור לפי"
            name="priceMethod"
            onChange={onchange}
          >
            <MenuItem value={"מיטה"}>מיטה</MenuItem>
            <MenuItem value={"זוג"}>זוג</MenuItem>
            <MenuItem value={"לילה"}>לילה</MenuItem>
            <MenuItem value={"אדם"}>אדם</MenuItem>
            <MenuItem value={"דירה"}>דירה</MenuItem>
          </Select>
        </FormControl>{" "}
      </Box>
    </div>
  );
}

export default DetailsApartment;
