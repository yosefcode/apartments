import "./jerusalem.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Jerusalem() {
  const filter = {};
  // const cityn = [];
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState({
    id: "",
    name: "",
    numuser: "",
    password: "",
  });

  const onchange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };
  console.log(inputValue);

  // useEffect(() => {
  //   setValue(filter.area);
  //   console.log(filter.area);
  //   console.log(value);
  // }, [filter]);

  const area = [
    { area: "צפון" },
    { area: "דרום" },
    { area: "מרכז" },
    { area: "ירושלים" },
  ];
  const area1 = ["צפון", "דרום", "מרכז", "ירושלים"];
  const cityn = ["רמת הגולן", "מירון", "טבריה", "צפת"];
  const cityj = ["ביתר", "תל ציון", "בית שמש", "ירושלים"];
  const cityc = ["פתח תקווה", "ראשון לציון", "תל אביב", "בני ברק"];
  const rooms = [5, 6, 7, 8, 9, 10, 11, 12];

  // const onchange = (e) => {
  //   filter.area = e.target.value;
  //   setValue(e.target.value);
  //   // filter.city = "";
  //   console.log(filter);

  //   // console.log(value);
  // };

  return (
    <div>
      <select onChange={onchange} name="name">
        <option value="">בחר איזור בארץ </option>{" "}
        {area1.map((fbb, index) => (
          <option key={index} value={fbb}>
            {fbb}{" "}
          </option>
        ))}
      </select>

      {/* {value && ( */}
      <select
        onChange={(e) => {
          filter.city = e.target.value;
          console.log(filter);
        }}
      >
        {value === "צפון" ? (
          cityn.map((fbb, index) => (
            <option key={index} value={fbb}>
              {fbb}{" "}
            </option>
          ))
        ) : value === "ירושלים" ? (
          cityj.map((fbb, index) => (
            <option key={index} value={fbb}>
              {fbb}{" "}
            </option>
          ))
        ) : value === "מרכז" ? (
          cityc.map((fbb, index) => (
            <option key={index} value={fbb}>
              {fbb}{" "}
            </option>
          ))
        ) : (
          <option></option>
        )}
      </select>
      <select
        onChange={(e) => {
          filter.rooms = +e.target.value;
          console.log(filter);
        }}
      >
        <option value="" selected>
          select your beverage
        </option>{" "}
        {rooms.map((rooms, index) => (
          <option key={index} value={rooms}>
            {rooms}{" "}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Jerusalem;
