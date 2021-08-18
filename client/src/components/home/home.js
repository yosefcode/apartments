// import "./home.css";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Home({ value }) {
//   let [list, setList] = useState([]);
//   console.log(value);

//   useEffect(() => {
//     // axios.get("/api/list/").then((res) => {
//     axios.get(`/api/list/?search=${value}`).then((res) => {
//       setList(res.data);
//     });
//   }, [value]);

//   return (
//     <div className="home">
//       דף הבית{" "}
//       <div>
//         {" "}
//         {list.map((list) => (
//           <div className="box" key={list.id}>
//             <div>
//               <img className="imgaa" src={list.image} alt=""></img>
//             </div>
//             <div>
//               דירת {list.rooms} חדרים - ב{list.city}
//               <br />
//               עד {list.beds} מיטות
//               <br />
//               {list.short}
//             </div>
//             <div>
//               החל מ{list.price} ש"ח ללילה
//               <br />
//               {list.phone}
//             </div>
//           </div>
//         ))}{" "}
//       </div>
//     </div>
//   );
// }

// export default Home;

import React, { useState } from "react";
import axios from "axios";
// import CountrySelector from "../countrySelect/CountrySelector";

const Forecast = () => {
  const todaysDate = new Date();
  const iosFormat = todaysDate.toISOString();
  const slicedFormat = iosFormat.slice(0, -8);
  const [dateStart, setDateStart] = useState(slicedFormat);
  const [duration, setDuration] = useState(5);
  const [everyNumOfHour, setEveryNumOfHour] = useState(12);
  const [country, setCountry] = useState("israel");
  const [coordinates, setCoordinates] = useState("");
  const [responseObj, setResponseObj] = useState();

  function handleChange(e, setStateName) {
    console.log("e", e.target.value.replace(/ /g, ""));
    setStateName(e.target.value.replace(/ /g, ""));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Name ${country},${coordinates}`);
  };

  const getForecast = () => {
    console.log("loading");
    console.log("date start:", slicedFormat);

    axios
      .get(
        // "https://@api.meteomatics.com/2021-08-16T00:00:00Z--2021-08-30T00:00:00Z:PT1H/t_2m:C/46.75246,5.98434/json",
        // "https://@api.meteomatics.com/2021-08-16T00:00:00       ZP10D:PT12H/t_2m:C/46.75246,5.98434/json",
        // https://api.meteomatics.com     /2021-08-17T07:13:03.904Z ZP10D:PT12H/t_2m:C/israel:0.1,0.1/json
        // `https://@api.meteomatics.com/${dateStart}ZP${duration}D:PT${everyNumOfHour}H/t_2m:C/${country}:0.1,0.1/json`,
        // `https://none_formanski:HwR8eabI7x5BM@api.meteomatics.com/${dateStart}ZP${duration}D:PT${everyNumOfHour}H/t_2m:C/${coordinates}/json`,
        `https://@api.meteomatics.com/${dateStart}ZP${duration}D:PT${everyNumOfHour}H/t_2m:C/${coordinates}/json`,
        // `http://localhost:8080/https://@api.meteomatics.com/${dateStart}ZP${duration}D:PT${everyNumOfHour}H/t_2m:C/${coordinates}/json`,
        // `https://serene-castle-60287.herokuapp.com/https://@api.meteomatics.com/${dateStart}ZP${duration}D:PT${everyNumOfHour}H/t_2m:C/${coordinates}/json`,

        {
          headers: {
            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Methods":
            //   "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            // "Access-Control-Allow-Headers":
            //   "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length",
          },
          auth: {
            username: "none_formanski",
            password: "HwR8eabI7x5BM",
          },
          // headers: {
          //   "Access-Control-Allow-Origin": true,
          // },
        }
      )
      .then((res) => {
        console.log(res.data.data[0].coordinates[0].dates);
        setResponseObj(res.data.data[0].coordinates[0].dates);
      });
  };

  return (
    <div>
      <h2>Find Current Weather Conditions</h2>
      <a
        href="https://www.google.com/maps/place/%D7%90%D7%A8%D7%99%D7%90%D7%9C%E2%80%AD/@32.0923756,35.1401115,13z/data=!3m1!4b1!4m5!3m4!1s0x151d270b0797feeb:0xe8ae03cbd935baad!8m2!3d32.104637!4d35.174514"
        target="noreferrer noopener"
      >
        Google Map
      </a>

      {/* <CountrySelector setCountry={setCountry} /> */}

      <form onSubmit={handleSubmit}>
        <label>
          country:
          <input
            type="text"
            value={country}
            onChange={(e) => handleChange(e, setCountry)}
          />
        </label>

        <label>
          coordinates:
          <input
            type="text"
            value={coordinates}
            onChange={(e) => handleChange(e, setCoordinates)}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
      {responseObj &&
        responseObj.map((item, index) => (
          <div key={index}>
            <span>date: {item.date.replace(/[TZ]/g, " ").slice(0, -4)}</span>
            <span> temp: {item.value} celzius</span>
          </div>
        ))}

      <button onClick={getForecast}>
        Get Forecast for 10 days at 12 o'clock pm, and 00 o'clock am
      </button>
    </div>
  );
};
export default Forecast;
