import "./home.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "../filter/filter";

function Home({ value }) {
  let [list, setList] = useState([]);
  const [filter, setFilter] = useState({});

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    axios.post(`/api/list/filter/`, filter).then((res) => {
      res.data < 1 ? getData() : setList(res.data);
    });
  }, [filter]);

  const getData = () => {
    axios.get("/api/list/").then((res) => {
      setList(res.data);
    });
  };

  // const getFilter = () => {
  //   axios.post(`/api/list/filter/`, filter).then((res) => {
  //     res.data < 1 ? getData() : setList(res.data);
  //   });
  // };

  return (
    <div className="home">
      דף הבית <Filter filter={filter} setFilter={setFilter} />
      {/* <button onClick={getFilter}>חפש</button> */}
      <div>
        {" "}
        {list.map((list) => (
          <div className="box" key={list._id}>
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
