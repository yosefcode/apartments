import "./myFavorite-page.css";
// import React, { useState, useEffect, useContext } from "react";
import Apartment from "./apartment-myFavorite-page/apartment-myFavorite-page";
import FilterArea from "../../filterArea/filterArea";

function myFavoritePage() {
  return (
    <div className="myFavorite-page">
      <div className="filterArea">
        <FilterArea />
      </div>

      <div className="divApartments">
        <Apartment />
      </div>
    </div>
  );
}

export default myFavoritePage;
