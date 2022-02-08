import "./detailsApartment.css";
import axios from "axios";
import { useState, useEffect } from "react";

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
  const [listCityFilter, setListCityFilter] = useState([]);
  const [listCityOptions, setListCityOptions] = useState(false);
  const [listStreetFilter, setListStreetFilter] = useState([]);
  const [listStreetOptions, setListStreetOptions] = useState(false);
  const [idCity, setidCity] = useState([]);

  // console.log(apartment);

  useEffect(() => {
    axios
      .get(
        "https://data.gov.il/api/3/action/datastore_search?resource_id=d4901968-dad3-4845-a9b0-a57d027f11ab&limit=5000"
      )
      .then((response) => {
        setListCity(response.data.result.records);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://data.gov.il/api/3/action/datastore_search?resource_id=a7296d1a-f8c9-4b70-96c2-6ebb4352f8e3&q=${idCity.id}&q=${idCity.name}&limit=50000`
      )
      .then((response) => {
        setListStreet(response.data.result.records);
      });
  }, [listCityFilter]);

  const split = (item) =>
    item
      .split(")שבט(")
      .join("")
      .split(")יישוב(")
      .join("")
      .split(")")
      .join(" - ")
      .split("(")
      .join("")
      .split("-")
      .join(" - ")
      .split("  ")
      .join("");

  let pushListCityFilter = [];

  let arryListCity = listCity.map((list) => ({
    name: list.שם_ישוב,
    id: list.סמל_ישוב,
  }));

  useEffect(() => {
    if (valueCity.length > 1) {
      arryListCity.forEach((list) => {
        if (
          list.name.toLocaleLowerCase().search(valueCity.toLocaleLowerCase()) >
          -1
        ) {
          pushListCityFilter.push(list);
          setListCityFilter(pushListCityFilter);
        } else if (pushListCityFilter.length < 1) {
          setListCityFilter([{ name: "שם לא קיים" }]);
        }
      });
    } else {
      setListCityOptions(false);
      setListCityFilter([]);
    }
  }, [valueCity]);

  let pushListStreetFilter = [];

  let arryListStreet = listStreet.map((list) => ({
    name: split(list.שם_ישוב),
    id: list.סמל_ישוב,
  }));

  useEffect(() => {
    if (valueStreet.length > 1) {
      console.log(valueStreet);

      arryListStreet.forEach((list) => {
        if (
          list.name
            .toLocaleLowerCase()
            .search(valueStreet.toLocaleLowerCase()) > -1
        ) {
          pushListStreetFilter.push(list);
          setListStreetFilter(pushListStreetFilter);
        } else if (pushListStreetFilter.length < 1) {
          setListStreetFilter([{ name: "שם לא קיים" }]);
        }
      });
    } else {
      setListStreetOptions(false);
      setListStreetFilter([]);
    }
  }, [valueStreet]);

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
            setListCityOptions(true);
            setValueStreet("");
            setListStreetFilter([]);
            setidCity("000000000000");
          }}
        />
        {listCityOptions && (
          <div className="div_list_city">
            {listCityFilter.map((item, index) => (
              <div
                className="div_list_city_item"
                key={index}
                onClick={() => {
                  console.log(item);
                  setListCityOptions(false);
                  // setListCityFilter([item]);
                  setValueCity(split(item.name));
                  setidCity(item);
                }}
              >
                {split(item.name)}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="divInputDetails">
        <label className="labelInput">בחר רחוב</label>
        <input
          className="inputDetails"
          value={valueStreet}
          // defaultValue={valueStreet}
          onChange={(e) => {
            setValueStreet(e.target.value);
            setListStreetOptions(true);
          }}
        />
        {listStreetOptions && (
          <div className="div_list_city">
            {listStreetFilter.map((item, index) => (
              <div
                className="div_list_city_item"
                key={index}
                onClick={() => {
                  setListStreetOptions(false);
                  // setListCityFilter([item]);
                  setValueStreet(item.name);
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
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
