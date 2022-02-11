import "./home.css";
// import React, { useState, useEffect, useContext } from "react";
import Apartment from "./apartment/apartment";
import FilterArea from "../filterArea/filterArea";
import Filter from "./filter/filter";

function Home() {
  return (
    <div className="home">
      <div className="div_filterArea">
        <FilterArea />
        <Filter />
      </div>

      <div className="divApartments">
        <Apartment />
      </div>
    </div>
  );
}

export default Home;
