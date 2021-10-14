import "./filterArea.css";
import React, { useState, useEffect, useContext } from "react";

import { Link } from "react-router-dom";
import { AppContext } from "../../variable-Context";
import ShowFavorite from "../favorite/showFavorite/showFavorite";

function FilterArea() {
  const { filter, setFilter } = useContext(AppContext);

  const listArea = [
    { area: "באיזור הצפון", filter: "צפון" },
    { area: "באיזור המרכז", filter: "מרכז" },
    { area: "באיזור ירושלים", filter: "ירושלים" },
    { area: "באיזור הדרום", filter: "דרום" },
    { area: "להחלפה", filter: "" },
  ];

  return (
    <div className="filterArea">
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
      <div className="divShowFavorite">
        <ShowFavorite />
      </div>
    </div>
  );
}

export default FilterArea;
