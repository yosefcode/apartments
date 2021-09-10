import "./home.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ApartmentShow from "../apartmentShow/apartmentShow";
import FilterArea from "../filterArea/filterArea";

function Home({ setFilter, filter }) {
  let [list, setList] = useState([]);
  let [show, setShow] = useState([]);
  let [status, setStatus] = useState(false);
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

  return (
    <div className="home">
      <FilterArea setFilter={setFilter} />
      {err && <div>לא נמצא שנה את החיפוש</div>}
      <div>
        {" "}
        {list.map((list) => (
          <div
            className="box"
            key={list._id}
            onClick={() => {
              setShow([list]);
              setStatus(true);
              // window.open(<div className="show"></div>);
            }}
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
        ))}{" "}
      </div>
      {status && <ApartmentShow setStatus={setStatus} show={show} />}{" "}
    </div>
  );
}

export default Home;
