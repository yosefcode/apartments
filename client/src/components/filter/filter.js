import "./filter.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Filter({ filter, setFilter }) {
  const [listOfCities, setListOfCities] = useState([]);

  useEffect(() => {
    axios.get("/api/list/").then((res) => {
      const list = res.data;
      const listFilter = [];

      for (var i = 0; i < list.length; ++i) {
        for (var j = i + 1; j < list.length; ++j) {
          if (list[i].city === list[j].city) list.splice(j--, 1);
        }
      }

      for (let i = 0; i < list.length; i++) {
        if (filter.area === list[i].area) {
          listFilter.push(list[i]);
        }
      }

      filter.area ? setListOfCities(listFilter) : setListOfCities(list);
    });
  }, [filter.area]);

  const onchange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  const area = [
    { area: "ירושלים", value: "jerusalem" },
    { area: "צפון", value: "north" },
    { area: "דרום", value: "south" },
    { area: "מרכז", value: "center" },
  ];
  const rooms = [5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div>
      <select onChange={onchange} name="area">
        <option value="">בחר איזור בארץ </option>{" "}
        {area.map((area, index) => (
          <option key={index} value={area.value}>
            {area.area}{" "}
          </option>
        ))}
      </select>

      <select onChange={onchange} name="city">
        <option value="">בחר עיר בארץ </option>{" "}
        {listOfCities.map((city, index) => (
          <option key={index} value={city.city}>
            {city.city}{" "}
          </option>
        ))}
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

export default Filter;
