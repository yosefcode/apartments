import "./detailsApartment.css";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  Input,
  Select,
  InputSelect,
} from "../../Input_select_button/Input_select_button";

function DetailsApartment({
  formik,
  onchange,
  itemForEdit,
  chooseCity,
  setChooseCity,
  chooseStreet,
  setChooseStreet,
}) {
  const [listCity, setListCity] = useState([]);
  const [listStreet, setListStreet] = useState([]);
  const [listCityFilter, setListCityFilter] = useState([]);
  const [listCityOptions, setListCityOptions] = useState(false);
  const [listStreetFilter, setListStreetFilter] = useState([]);
  const [listStreetOptions, setListStreetOptions] = useState(false);
  const [idCity, setidCity] = useState([]);
  const [valueCity, setValueCity] = useState("");
  const [valueStreet, setValueStreet] = useState("");

  // console.log(valueCity);

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
    name: split(list.שם_רחוב),
    id: list.סמל_ישוב,
  }));

  useEffect(() => {
    if (valueStreet.length > 1 && idCity.id) {
      arryListStreet.forEach((list) => {
        if (
          list.name
            .toLocaleLowerCase()
            .search(valueStreet.toLocaleLowerCase()) > -1
        ) {
          pushListStreetFilter.push(list);
          setListStreetFilter(pushListStreetFilter);
        } else if (pushListStreetFilter.length < 1) {
          setListStreetFilter([{ name: "רחוב לא קיים" }]);
        }
      });
    } else if (valueStreet.length > 0 && !idCity.id) {
      setListStreetFilter([{ name: "ישוב לא נבחר" }]);
    } else {
      setListStreetOptions(false);
      setListStreetFilter([]);
    }
  }, [valueStreet]);

  const area = [
    { value: "ירושלים", title: "איזור ירושלים" },
    { value: "דרום", title: "איזור הדרום" },
    { value: "דרום", title: "איזור המרכז" },
    { value: "צפון", title: "איזור הצפון" },
  ];

  const priceMethod = [
    { value: "מיטה", title: "מיטה" },
    { value: "זוג", title: "זוג" },
    { value: "לילה", title: "לילה" },
    { value: "אדם", title: "אדם" },
    { value: "דירה", title: "דירה" },
  ];

  return (
    <div className="div-all-input">
      <Input
        label={"שם מקום האירוח"}
        placeholder={"לדוגמא: דירה ברמה"}
        name={"nameApartment"}
        onChange={onchange}
        formikErr={formik.errors.nameApartment}
        width={"23%"}
        defaultValue={itemForEdit ? itemForEdit.nameApartment : ""}
      />

      <Select
        label={"בחר איזור בארץ"}
        name={"area"}
        onChange={onchange}
        formikErr={formik.errors.area}
        options={area}
        width={"23%"}
        defaultValue={itemForEdit ? itemForEdit.area : ""}
      />

      <InputSelect
        label={"בחר עיר"}
        onChange={(e) => {
          setValueCity(e.target.value);
          setListCityOptions(true);
          setValueStreet("");
          setListStreetFilter([]);
          setidCity("000000000000");
          setListStreetOptions(false);
          setChooseCity("");
        }}
        formikErr={formik.errors.city}
        width={"23%"}
        value={chooseCity ? chooseCity : valueCity}
        onClick={() => {
          setListCityOptions(!listCityOptions);
        }}
        content={
          listCityOptions && (
            <div className="div_list_city">
              {listCityFilter.length > 0
                ? listCityFilter.map((item, index) => (
                    <div
                      className="div_list_city_item"
                      key={index}
                      onClick={() => {
                        setListCityOptions(false);
                        // setListCityFilter([item]);
                        setChooseCity(split(item.name));
                        setValueCity(split(item.name));
                        setidCity(item);
                      }}
                    >
                      {split(item.name)}
                    </div>
                  ))
                : "יש להקליד לפחות 2 תווים"}
            </div>
          )
        }
      />

      <InputSelect
        label={"בחר רחוב"}
        onChange={(e) => {
          setValueStreet(e.target.value);
          setListStreetOptions(true);
          setChooseStreet("");
        }}
        formikErr={formik.errors.city}
        width={"23%"}
        value={chooseStreet ? chooseStreet : valueStreet}
        onClick={() => {
          setListStreetOptions(!listStreetOptions);
        }}
        content={
          listStreetOptions && (
            <div className="div_list_city">
              {listStreetFilter.map((item, index) => (
                <div
                  className="div_list_city_item"
                  key={index}
                  onClick={() => {
                    setListStreetOptions(false);
                    // setListCityFilter([item]);
                    setValueStreet(item.name);
                    setChooseStreet(item.name);
                  }}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )
        }
      />

      <Input
        label={"מס' חדרים"}
        name={"rooms"}
        onChange={onchange}
        defaultValue={itemForEdit ? itemForEdit.rooms : ""}
        formikErr={formik.errors.rooms}
        width={"23%"}
      />

      <Input
        label={"מס' מיטות"}
        name={"beds"}
        onChange={onchange}
        defaultValue={itemForEdit ? itemForEdit.beds : ""}
        formikErr={formik.errors.beds}
        width={"23%"}
      />

      <Select
        label={"תמחור לפי"}
        name={"priceMethod"}
        onChange={onchange}
        defaultValue={itemForEdit ? itemForEdit.priceMethod : ""}
        formikErr={formik.errors.priceMethod}
        options={priceMethod}
        width={"23%"}
      />

      <Input
        label={"מחיר"}
        name={"price"}
        onChange={onchange}
        defaultValue={itemForEdit ? itemForEdit.price : ""}
        formikErr={formik.errors.price}
        width={"23%"}
      />
    </div>
  );
}

export default DetailsApartment;
