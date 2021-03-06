import "./filter.css";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
// import Mater from "../select";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import { Button } from "@material-ui/core";
import { AppContext } from "../../../variable-Context";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "80%",
    maxWidth: "80%",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 20;
const MenuProps = {
  PaperProps: {
    style: {
      fontSize: "1.5rem",
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function Filter() {
  const classes = useStyles();
  const [personName, setPersonName] = useState([]);
  const [amountOfBeds, setamountOfBeds] = useState([]);
  const [area1, setarea1] = useState([]);
  const [listOfCities, setListOfCities] = useState([]);
  const { filter, setFilter } = useContext(AppContext);

  useEffect(() => {
    axios.get("/api/list/").then((res) => {
      const list = res.data;
      const listFilter = [];
      // if (filter.city && filter.city.length < 1) {
      // }
      delete filter.city;

      for (var i = 0; i < list.length; ++i) {
        for (var j = i + 1; j < list.length; ++j) {
          if (list[i].city === list[j].city) list.splice(j--, 1);
        }
      }

      const b = filter.area ? filter.area.length : 0;

      for (let i = 0; i < list.length; i++) {
        for (let a = 0; a < b; a++) {
          if (filter.area[a] === list[i].area) {
            listFilter.push(list[i]);
          }
        }
      }

      //       const [a, seta] = useState(0);
      //       const [b, setb] = useState(4);
      //       const filter = [];
      //       const [list, setList] = useState([]);

      //       for (let i = a; i < b; i++) {
      //                  filter.push( res.data[i]);
      //           }

      //           setList(filter)

      // <button onclick={()=>{seta(+5); setb(+5)}}>next</button>

      // for (let i = 0; i < filter.length; i++) {
      //   delete filter.city[i];
      // }

      setPersonName([]);
      filter.area ? setListOfCities(listFilter) : setListOfCities(list);
    });
  }, [filter.area]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
    if (event.target.value.length > 0) {
      setFilter({
        ...filter,
        [event.target.name]: event.target.value,
      });
    } else
      delete filter.city &&
        setFilter({
          ...filter,
        });
  };

  const onChangeAmountOfBeds = (event) => {
    setamountOfBeds(event.target.value);
    if (event.target.value.length > 0) {
      setFilter({
        ...filter,
        [event.target.name]: event.target.value,
      });
    } else
      delete filter.rooms &&
        setFilter({
          ...filter,
        });
  };
  // console.log(filter);
  // console.log(amountOfBeds.length);
  const onChangeArea = (event) => {
    setarea1(event.target.value);
    if (event.target.value.length > 0) {
      setFilter({
        ...filter,
        [event.target.name]: event.target.value,
      });
    } else
      delete filter.area &&
        setFilter({
          ...filter,
        });
  };

  const area = [
    { area: "??????????????", value: "??????????????" },
    { area: "????????", value: "????????" },
    { area: "????????", value: "????????" },
    { area: "????????", value: "????????" },
  ];
  const rooms = [5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="filter">
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-checkbox-label">
            ?????? ?????????? ????????
          </InputLabel>
          <Select
            labelId="demo-mutiple"
            id="demo-mutiple-checkbox"
            multiple
            value={area1}
            onChange={onChangeArea}
            input={<Input />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
            name={"area"}
          >
            {area.map((area) => (
              <MenuItem key={area.area} value={area.value}>
                <Checkbox checked={area1.indexOf(area.value) > -1} />
                <ListItemText primary={area.area} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">?????? ??????</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
          name={"city"}
        >
          {listOfCities.map((name) => (
            <MenuItem key={name.city} value={name.city}>
              <Checkbox checked={personName.indexOf(name.city) > -1} />
              <ListItemText primary={name.city} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-checkbox-label">
            ?????? ???????? ??????????
          </InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={amountOfBeds}
            onChange={onChangeAmountOfBeds}
            input={<Input />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
            name={"rooms"}
          >
            {rooms.map((rooms) => (
              <MenuItem key={rooms} value={rooms}>
                <Checkbox checked={amountOfBeds.indexOf(rooms) > -1} />
                <ListItemText primary={rooms} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* <select
        onChange={onchange}
        name="area"
        placeholder="Select option"
        // value=""
      >
        <option value="">?????? ?????????? ???????? </option>{" "}
        {area.map((area, index) => (
          <option key={index} value={area.value}>
            {area.area}{" "}
          </option>
        ))}
      </select> */}

      {/* <select onChange={onchange} name="city">
        <option value="">?????? ?????? ???????? </option>{" "}
        {listOfCities.map((city, index) => (
          <option key={index} value={city.city}>
            {city.city}{" "}
          </option>
        ))}
      </select> */}

      {/* <Mater
        filter={filter}
        setFilter={setFilter}
        listOfCities={listOfCities}
      /> */}
      {/* <select onChange={onchange} name="rooms">
        <option value="">?????? ???????? ?????????? </option>{" "}
        {rooms.map((rooms, index) => (
          <option key={index} value={rooms}>
            {rooms}{" "}
          </option>
        ))}
      </select> */}
    </div>
  );
}

export default Filter;
