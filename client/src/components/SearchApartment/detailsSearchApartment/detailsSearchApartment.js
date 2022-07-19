import "./detailsSearchApartment.css";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  Input,
  Select,
  InputSelect,
  TextArea,
} from "../../Input_select_button/Input_select_button";

function DetailsSearchApartment({
  formik,
  onchange,
  itemForEdit,
  chooseCity,
  setChooseCity,
  listCityOptions,
  setListCityOptions,
  setApartment,
  apartment,
}) {
  const [listCity, setListCity] = useState([]);
  const [listCityFilter, setListCityFilter] = useState([]);
  const [valueCity, setValueCity] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://data.gov.il/api/3/action/datastore_search?resource_id=d4901968-dad3-4845-a9b0-a57d027f11ab&limit=50000"
      )
      .then((response) => {
        setListCity(response.data.result.records);
      });
  }, []);

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

  useEffect(() => {
    if (valueCity.length > 1) {
      listCity.forEach((list) => {
        if (
          list.שם_ישוב
            .toLocaleLowerCase()
            .search(valueCity.toLocaleLowerCase()) > -1
        ) {
          pushListCityFilter.push(list);
          setListCityFilter(pushListCityFilter);
        } else if (pushListCityFilter.length < 1) {
          setListCityFilter([{ שם_ישוב: "שם לא קיים" }]);
        }
      });
    } else {
      setListCityOptions(false);
      setListCityFilter([]);
    }
  }, [valueCity]);

  const area = [
    { value: "ירושלים", title: "איזור ירושלים" },
    { value: "דרום", title: "איזור הדרום" },
    { value: "דרום", title: "איזור המרכז" },
    { value: "צפון", title: "איזור הצפון" },
  ];

  return (
    <div className="div-all-input">
      <div className="div-all-input div_details_listCity">
        <Select
          label={"בחר איזור בארץ"}
          name={"area"}
          onChange={onchange}
          formikErr={formik.errors.area}
          options={area}
          width={"90%"}
          defaultValue={itemForEdit ? itemForEdit.area : ""}
        />

        <InputSelect
          label={"בחר עיר"}
          onChange={(e) => {
            setValueCity(e.target.value);
            setListCityOptions(true);
          }}
          formikErr={formik.errors.city}
          width={"90%"}
          value={valueCity}
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
                          setChooseCity([...chooseCity, split(item.שם_ישוב)]);
                          setValueCity("");
                        }}
                      >
                        {split(item.שם_ישוב)}
                      </div>
                    ))
                  : "יש להקליד לפחות 2 תווים"}
              </div>
            )
          }
        />
        <br className="br" />
        <div className="div_choose_city">
          {chooseCity.map((item, index) => {
            return (
              <div className="choose_city" key={index}>
                <span>{item}</span>
                <span
                  className="span_delete_city"
                  onClick={() => {
                    setChooseCity(chooseCity.filter((e) => e !== item));
                  }}
                >
                  X
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <br />
      <div className="div-all-input div_details">
        <Input
          label={"מס' חדרים"}
          name={"rooms"}
          onChange={onchange}
          defaultValue={itemForEdit ? itemForEdit.rooms : ""}
          formikErr={formik.errors.rooms}
          width={"90%"}
        />

        <Input
          label={"מס' מיטות"}
          name={"beds"}
          onChange={onchange}
          defaultValue={itemForEdit ? itemForEdit.beds : ""}
          formikErr={formik.errors.beds}
          width={"90%"}
        />

        <Input
          label={"מחיר"}
          name={"price"}
          onChange={onchange}
          defaultValue={itemForEdit ? itemForEdit.price : ""}
          formikErr={formik.errors.price}
          width={"90%"}
        />
      </div>

      <div className="div-all-input">
        <TextArea
          label={"ספרו לנו מה אתם מחפשים"}
          onInput={(e) => {
            setApartment({
              ...apartment,
              long: e.currentTarget.textContent,
            });
          }}
          formikErr={formik.errors.long}
          width={"92%"}
          height={"14rem"}
          content={itemForEdit ? itemForEdit.long : ""}
          contentEditable={true}
        />
      </div>
    </div>
  );
}

export default DetailsSearchApartment;
