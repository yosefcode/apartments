import "./detailsApartment.css";
import axios from "axios";
import { useState, useEffect } from "react";

function DetailsApartment({ id, setApartment, apartment, onchange }) {
  const [aaa, setaaa] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://data.gov.il/dataset/citiesandsettelments/resource/72bd51be-512b-4430-b2d2-f3295c90e569/download/72bd51be-512b-4430-b2d2-f3295c90e569.xml"
      )
      .then((res) => {
        setaaa(res.data);
      });
  }, []);

  // console.log(aaa);

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
        <select
          className="inputDetails"
          id="width-select"
          name="city"
          onChange={onchange}
        >
          {" "}
          <option value={""} disabled selected></option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
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
