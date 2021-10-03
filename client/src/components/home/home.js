import "./home.css";
// import React, { useState, useEffect, useContext } from "react";
import Apartment from "./apartment/apartment";
import FilterArea from "../filterArea/filterArea";

function Home() {
  return (
    <div className="home">
      <div className="filterArea">
        <FilterArea />
      </div>

      <div className="divApartments">
        <Apartment />
      </div>
    </div>
  );
}

export default Home;
