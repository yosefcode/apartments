import "./home.css";
import React, { useState, useEffect, useContext } from "react";
import Apartment from "../apartment/apartment";
import { AppContext } from "../../variable-Context";

function Home() {
  const { filter, setFilter } = useContext(AppContext);

  return (
    <div className="home">
      <Apartment setFilter={setFilter} filter={filter} />
    </div>
  );
}

export default Home;
