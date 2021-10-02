import "./filterArea.css";
import React, { useState, useEffect, useContext } from "react";

import { Link } from "react-router-dom";
import { AppContext } from "../../variable-Context";

function FilterArea() {
  const { filter, setFilter } = useContext(AppContext);

  const listArea = [
    { area: "בצפון", filter: "צפון" },
    { area: "במרכז", filter: "מרכז" },
    { area: "בירושלים", filter: "ירושלים" },
    { area: "בדרום", filter: "דרום" },
    { area: "להחלפה", filter: "" },
  ];

  return (
    <div>
      {listArea.map((area) => (
        <Link to={"/"}>
          <button
            className="btnarea"
            onClick={() => {
              setFilter({ area: [area.filter] });
            }}
          >
            דירות {area.area}{" "}
          </button>
        </Link>
      ))}
    </div>
  );
}

export default FilterArea;
