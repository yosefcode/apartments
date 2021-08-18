import "./home.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Home({ value }) {
  let [list, setList] = useState([]);
  console.log(value);

  useEffect(() => {
    // axios.get("/api/list/").then((res) => {
    axios.get(`/api/list/?search=${value}`).then((res) => {
      setList(res.data);
    });
  }, [value]);

  return (
    <div className="home">
      דף הבית{" "}
      <div>
        {" "}
        {list.map((list) => (
          <div className="box" key={list.id}>
            <div>
              <img className="imgaa" src={list.image} alt=""></img>
            </div>
            <div>
              דירת {list.rooms} חדרים - ב{list.city}
              <br />
              עד {list.beds} מיטות
              <br />
              {list.short}
            </div>
            <div>
              החל מ{list.price} ש"ח ללילה
              <br />
              {list.phone}
            </div>
          </div>
        ))}{" "}
      </div>
    </div>
  );
}

export default Home;
