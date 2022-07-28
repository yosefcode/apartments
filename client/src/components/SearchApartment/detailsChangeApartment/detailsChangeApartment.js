import "./detailsChangeApartment.css";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  Input,
  Select,
  InputSelect,
  TextArea,
} from "../../Input_select_button/Input_select_button";

function DetailsChangeApartment({
  formik,
  onchange,
  itemForEdit,
  chooseCityChange,
  setChooseCityChange,
  listCityChangeOptions,
  setListCityChangeOptions,
  setApartment,
  apartment,
}) {
  const [listCity, setListCity] = useState([]);
  const [listCityFilter, setListCityFilter] = useState([]);
  const [valueCity, setValueCity] = useState(
    itemForEdit ? itemForEdit.cityChange : ""
  );

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
      setListCityChangeOptions(false);
      setListCityFilter([]);
    }
  }, [valueCity]);

  const area = [
    { value: "איזור ירושלים", title: "איזור ירושלים" },
    { value: "איזור הדרום", title: "איזור הדרום" },
    { value: "איזור המרכז", title: "איזור המרכז" },
    { value: "איזור הצפון", title: "איזור הצפון" },
  ];

  return (
    <div className="div-all-input">
      <div className="div-all-input div_details_listCity">
        <Select
          label={"בחר איזור בארץ"}
          name={"areaChange"}
          onChange={onchange}
          formikErr={formik.errors.areaChange}
          options={area}
          width={"90%"}
          defaultValue={itemForEdit ? itemForEdit.areaChange : ""}
        />

        <InputSelect
          label={"בחר עיר"}
          onChange={(e) => {
            setValueCity(e.target.value);
            setListCityChangeOptions(true);
            setChooseCityChange("");
          }}
          formikErr={formik.errors.cityChange}
          width={"90%"}
          value={valueCity}
          onClick={() => {
            setListCityChangeOptions(!listCityChangeOptions);
          }}
          content={
            listCityChangeOptions && (
              <div className="div_list_city">
                {listCityFilter.length > 0
                  ? listCityFilter.map((item, index) => (
                      <div
                        className="div_list_city_item"
                        key={index}
                        onClick={() => {
                          setListCityChangeOptions(false);
                          setChooseCityChange(split(item.שם_ישוב).toString());
                          setValueCity(split(item.שם_ישוב));
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
      </div>

      <br />
      <div className="div-all-input div_details">
        <Input
          label={"מס' חדרים"}
          name={"roomsChange"}
          onChange={onchange}
          defaultValue={itemForEdit ? itemForEdit.roomsChange : ""}
          formikErr={formik.errors.roomsChange}
          width={"90%"}
        />

        <Input
          label={"מס' מיטות"}
          name={"bedsChange"}
          onChange={onchange}
          defaultValue={itemForEdit ? itemForEdit.bedsChange : ""}
          formikErr={formik.errors.bedsChange}
          width={"90%"}
        />
      </div>

      <div className="div-all-input">
        <TextArea
          label={"ספרו לנו מה אתם מציעים בדירה שלכם"}
          onInput={(e) => {
            setApartment({
              ...apartment,
              longChange: e.currentTarget.textContent,
            });
          }}
          formikErr={formik.errors.long}
          width={"92%"}
          height={"14rem"}
          content={itemForEdit ? itemForEdit.longChange : ""}
          contentEditable={true}
        />
      </div>
    </div>
  );
}

export default DetailsChangeApartment;
