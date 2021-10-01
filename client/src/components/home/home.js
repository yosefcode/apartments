import "./home.css";
import React, { useState, useEffect } from "react";
import Apartment from "../apartment/apartment";

function Home({ setFilter, filter }) {
  return (
    <div className="home">
      <Apartment setFilter={setFilter} filter={filter} />
    </div>
  );
}

export default Home;
