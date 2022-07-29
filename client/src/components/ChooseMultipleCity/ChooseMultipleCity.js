import "./ChooseMultipleCity.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { InputSelect } from "../Input_select_button/Input_select_button";

function ChooseMultipleCity({
  formikErr,
  chooseCity,
  setChooseCity,
  listCityOptions,
  setListCityOptions,
  disabledInputSelect,
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

  return (
    <div>
      <InputSelect
        label={"בחר עיר"}
        onChange={(e) => {
          setValueCity(e.target.value);
          setListCityOptions(true);
        }}
        formikErr={formikErr}
        disabledInputSelect={disabledInputSelect}
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
  );
}

export default ChooseMultipleCity;
