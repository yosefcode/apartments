import "./home.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "../jerusalem/jerusalem";

function Home({ value }) {
  let [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState({
    // id: "",
    // area: "",
    // city: "",
    // rooms: "",
  });
  // const aaa = inputValue;
  // console.log(aaa);

  // console.log(inputValue.area);
  useEffect(() => {
    asas();
  }, []);

  const asas = () => {
    axios.get("/api/list/").then((res) => {
      // axios.get(`http://localhost:7000/api/list/`).then((res) => {
      // axios.get(`/api/list/?search=${inputValue}`).then((res) => {
      setList(res.data);
    });
  };

  const asdf = () => {
    axios.post(`/api/list/filter/`, inputValue).then((res) => {
      res.data < 1 ? asas() : setList(res.data);
    });
  };

  return (
    <div className="home">
      דף הבית <Filter inputValue={inputValue} setInputValue={setInputValue} />
      <button onClick={asdf}>sssssss</button>
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
