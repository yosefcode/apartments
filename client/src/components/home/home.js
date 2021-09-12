import "./home.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import FilterArea from "../filterArea/filterArea";
import { Link } from "react-router-dom";

function Home({ setFilter, filter }) {
  let [list, setList] = useState([]);
  let [err, setErr] = useState(false);

  useEffect(() => {
    axios.post(`/api/list/filter/`, filter).then((res) => {
      const asd = () => {
        setList(res.data);
        setErr(false);
      };
      res.data < 1 ? getData() : asd();
    });
  }, [filter]);

  const getData = () => {
    axios.get("/api/list/").then((res) => {
      setList(res.data);
      setErr(true);
    });
  };

  // const openLink = () => {
  //   window.open("/manage/");
  //   // window.open("/api/Manage");
  // };

  return (
    <div className="home">
      <FilterArea setFilter={setFilter} />
      {err && <div>לא נמצא שנה את החיפוש</div>}
      <div>
        {" "}
        {list.map((list) => (
          <Link to={"/" + list._id} target="_blank">
            <div
              className="box"
              key={list._id}
              // onClick={() => {
              //   window.open("/" + list._id);
              //   // window.open("/api/Manage");
              // }}
            >
              <div>
                <img className="imgaa" src={list.firstImage} alt=""></img>
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
          </Link>
        ))}{" "}
      </div>
    </div>
  );
}

export default Home;
