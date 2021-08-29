import "./jerusalem.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Jerusalem({ inputValue, setInputValue }) {
  const filter = {};
  // const cityn = [];
  const [value, setValue] = useState("");
  // const [inputValue, setInputValue] = useState({
  //   // id: "",
  //   // area: "",
  //   // city: "",
  //   // rooms: "",
  // });

  const onchange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(inputValue);

  // useEffect(() => {
  //   setValue(filter.area);
  //   console.log(filter.area);
  //   console.log(value);
  // }, [filter]);

  const area = [
    { area: "צפון", value: "north" },
    { area: "דרום", value: "south" },
    { area: "מרכז", value: "center" },
    { area: "ירושלים", value: "jerusalem" },
  ];
  const area1 = ["north", "center", "דרום", "מרכז", "ירושלים"];
  const cityn = ["רמת הגולן", "מירון", "טבריה", "צפת"];
  const cityj = ["ביתר", "תל ציון", "בית שמש", "ירושלים"];
  const cityc = ["פתח תקווה", "ראשון לציון", "תל אביב", "בני ברק"];
  const citys = ["אשדוד", "שדרות", "נתיבות", "באר שבע "];
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
      <select onChange={onchange} name="area">
        <option value="">בחר איזור בארץ </option>{" "}
        {area.map((fbb, index) => (
          <option key={index} value={fbb.value}>
            {fbb.area}{" "}
          </option>
        ))}
      </select>

      <select onChange={onchange} name="city">
        <option value="">בחר עיר בארץ </option>{" "}
        {inputValue.area === "north" ? (
          cityn.map((fbb, index) => (
            <option key={index} value={fbb}>
              {fbb}{" "}
            </option>
          ))
        ) : inputValue.area === "jerusalem" ? (
          cityj.map((fbb, index) => (
            <option key={index} value={fbb}>
              {fbb}{" "}
            </option>
          ))
        ) : inputValue.area === "center" ? (
          cityc.map((fbb, index) => (
            <option key={index} value={fbb}>
              {fbb}{" "}
            </option>
          ))
        ) : inputValue.area === "south" ? (
          citys.map((fbb, index) => (
            <option key={index} value={fbb}>
              {fbb}{" "}
            </option>
          ))
        ) : (
          <option></option>
        )}
      </select>
      <select onChange={onchange} name="rooms">
        <option value="" selected>
          בחר מספר חדרים{" "}
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
