import "./bar.css";
import React, { useState, useEffect, useContext } from "react";
import FilterArea from "../filterArea/filterArea";
import { AppContext } from "../../variable-Context";

const Bar = () => {
  const { filter, setFilter } = useContext(AppContext);

  return (
    <div className="bar">
      <div className="allURL">
        <a className="btnhome" href="/">
          דירות נופש{" "}
        </a>
        <div></div>
        <div></div>
        <div></div>
        <a className="btnsend" href="/send/">
          פרסם דירתך{" "}
        </a>{" "}
      </div>

      <div className="filterArea">
        <FilterArea setFilter={setFilter} />
      </div>
    </div>
  );
};

export default Bar;
