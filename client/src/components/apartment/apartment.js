import "./apartment.css";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AppContext } from "../../variable-Context";

function Apartment() {
  let [list, setList] = useState([]);
  const { filter, setFilter } = useContext(AppContext);

  useEffect(() => {
    axios.post(`/api/list/filter/`, filter).then((res) => {
      const getFilter = () => {
        setList(res.data);
      };
      res.data < 1 ? getData() : getFilter();
    });
  }, [filter]);

  const getData = () => {
    axios.get("/api/list/").then((res) => {
      setList(res.data);
    });
  };

  return (
    <div className="home">
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

export default Apartment;
