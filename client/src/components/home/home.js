import "./home.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Home({ setFilter, filter }) {
  let [list, setList] = useState([]);
  let [show, setShow] = useState([]);
  let [status, setStatus] = useState(false);
  let [err, setErr] = useState(false);

  // useEffect(() => {
  //   getData();
  // }, []);

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
      {/* <button onClick={getFilter}>חפש</button> */}
      <button
        className="btnarea"
        onClick={() => {
          setFilter({ area: ["south"] });
        }}
      >
        דירות בדרום
      </button>{" "}
      <button
        className="btnarea"
        onClick={() => {
          setFilter({ area: ["north"] });
        }}
      >
        דירות בצפון
      </button>{" "}
      <button
        className="btnarea"
        onClick={() => {
          setFilter({ area: ["center"] });
        }}
      >
        דירות במרכז
      </button>{" "}
      <button
        className="btnarea"
        onClick={() => {
          setFilter({ area: ["jerusalem"] });
        }}
      >
        דירות בירושלים
      </button>
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
            }}
          >
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
      {status && (
        <div
          className="transport"
          onClick={() => {
            setStatus(false);
          }}
        >
          <div className="show">
            {show.map((list) => (
              <div
                className="box"
                key={list._id}
                // onClick={() => {
                //   setStatus(false);
                // }}
              >
                <div>
                  <img className="imgaa" src={list.image} alt=""></img>
                </div>
                <div>
                  דירת {list.rooms} חדרים - ב{list.city}
                  <br />
                  עד {list.beds} מיטות
                  <br />
                  {list.long}
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
      )}{" "}
    </div>
  );
}

export default Home;
