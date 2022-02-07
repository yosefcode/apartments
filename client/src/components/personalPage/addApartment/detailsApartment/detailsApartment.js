import "./detailsApartment.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { parseString } from "xml2js";
// var parseString = require("xml2js").parseString;
import SelectSearch, { fuzzySearch } from "react-select-search";

function DetailsApartment({
  id,
  setApartment,
  apartment,
  onchange,
  setValueCity,
  setValueStreet,
  valueStreet,
  valueCity,
}) {
  const [listCity, setListCity] = useState([]);
  const [listStreet, setListStreet] = useState([]);
  const [aad, setaa] = useState([]);

  console.log(apartment);

  useEffect(() => {
    axios
      .get(
        "https://data.gov.il/api/3/action/datastore_search?resource_id=d4901968-dad3-4845-a9b0-a57d027f11ab&limit=5000"
      )
      .then((response) => {
        // for (let index = 0; index < 100; index++) {
        //   console.log(response.data.result.records[index].שם_ישוב);
        // }
        setListCity(response.data.result.records);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://data.gov.il/api/3/action/datastore_search?resource_id=a7296d1a-f8c9-4b70-96c2-6ebb4352f8e3&q=${aad?.bb}&limit=50000`
      )
      .then((response) => {
        // for (let index = 0; index < 100; index++) {
        //   console.log(response.data.result.records[index].שם_ישוב);
        // }
        setListStreet(response.data.result.records);
        // setListCity(response);
      });
  }, [aad]);
  // console.log(listStreet);
  // console.log(listCity);
  // console.log(aad);

  const aa = (a) =>
    a
      .split("  ")
      .join("")
      .split(")שבט(")
      .join("")
      .split(")יישוב(")
      .join("")
      .split(")")
      .join(" - ")
      .split("(")
      .join("")
      .split("-")
      .join(" - ");

  let resultstreet = listStreet.map(
    (a) => ({
      aa: aa(a.שם_רחוב + " " + a.סמל_רחוב + " " + a.שם_ישוב),
      bb: a.סמל_רחוב,
    })
    //     aa:
    //       a.שם_רחוב.split("  ").join("") +
    //       " " +
    //       a.סמל_רחוב +
    //       " " +
    //       a.שם_ישוב,
    //   }}

    // ?
    // : null
    // .split(")שבט(")
    // .join("")
    // .split(")יישוב(")
    // .join("")
    // .split(")")
    // .join(" - ")
    // .split("(")
    // .join("")
    // .split("-")
    // .join(" - ")
  );

  let matchingStrings = [];

  let result = listCity.map((a) => ({
    name: aa(a.שם_ישוב),
    value: aa(a.שם_ישוב),
    bb: a.סמל_ישוב,
  }));

  useEffect(() => {
    if (valueCity.length > 1) {
      result.forEach((list) => {
        if (
          list.name.toLocaleLowerCase().search(valueCity.toLocaleLowerCase()) >
          -1
        ) {
          matchingStrings.push(list);
        }
      });
      setaa(matchingStrings);
    } else {
      setaa([]);
    }
  }, [valueCity]);

  return (
    <div className="div-all-input">
      <div className="divInputDetails">
        <label className="labelInput">שם מקום האירוח</label>
        <input
          className="inputDetails"
          placeholder="לדוגמא: דירה ברמה"
          type="text"
          name="nameApartment"
          onChange={onchange}
        />
      </div>

      <div className="divInputDetails">
        <label className="labelInput">בחר איזור בארץ</label>
        <select
          className="inputDetails"
          id="width-select"
          name="area"
          onChange={onchange}
        >
          <option value={""} disabled selected></option>
          <option value={"ירושלים"}>איזור ירושלים</option>
          <option value={"דרום"}>איזור הדרום</option>
          <option value={"מרכז"}>איזור המרכז</option>
          <option value={"צפון"}>איזור הצפון</option>
        </select>
      </div>

      <div className="divInputDetails">
        <label className="labelInput">בחר עיר</label>
        <input
          className="inputDetails"
          value={valueCity}
          // defaultValue={valueCity}
          onChange={(e) => {
            setValueCity(e.target.value);
          }}
        />
        {aad.map((a) => (
          <div
            style={{ textAlign: "center", fontSize: "1.8em", color: "black" }}
            onClick={() => {
              setaa([a]);
              setValueCity(a.name);
              console.log(a.name);
            }}
          >
            {a.name}
          </div>
        ))}
      </div>

      <div className="divInputDetails">
        <label className="labelInput">בחר רחוב</label>
        <input
          className="inputDetails"
          value={valueCity}
          // defaultValue={valueCity}
          onChange={(e) => {
            setValueCity(e.target.value);
          }}
        />
        {aad.map((a) => (
          <div
            style={{ textAlign: "center", fontSize: "1.8em", color: "black" }}
            onClick={() => {
              setaa([a]);
              setValueCity(a.name);
              console.log(a.name);
            }}
          >
            {a.name}
          </div>
        ))}
      </div>

      <div className="divInputDetails">
        <label className="labelInput">מס' חדרים</label>
        <input
          className="inputDetails"
          type="text"
          name="rooms"
          onChange={onchange}
        />
      </div>

      <div className="divInputDetails">
        <label className="labelInput">מס' מיטות</label>
        <input
          className="inputDetails"
          type="text"
          name="beds"
          onChange={onchange}
        />
      </div>

      <div className="divInputDetails">
        <label className="labelInput">תמחור לפי</label>
        <select
          className="inputDetails"
          id="width-select"
          name="priceMethod"
          onChange={onchange}
        >
          <option value={""} disabled selected></option>
          <option value={"מיטה"}>מיטה</option>
          <option value={"זוג"}>זוג</option>
          <option value={"לילה"}>לילה</option>
          <option value={"אדם"}>אדם</option>
          <option value={"דירה"}>דירה</option>
        </select>
      </div>

      <div className="divInputDetails">
        <label className="labelInput">מחיר</label>
        <input
          className="inputDetails"
          type="text"
          name="price"
          onChange={onchange}
        />
      </div>
    </div>
  );
}

export default DetailsApartment;
