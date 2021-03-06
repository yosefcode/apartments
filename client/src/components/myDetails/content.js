import React, { useState, useEffect } from "react";
import { parsePhoneNumber } from "libphonenumber-js";
import {
  Input,
  Select,
  Checkbox,
} from "../Input_select_button/Input_select_button";
import ChooseMultipleCity from "../ChooseMultipleCity/ChooseMultipleCity";

function Content({
  setDetailsUser,
  detailsUser,
  formik,
  onchange,
  listCityOptionsSale,
  setListCityOptionsSale,
  listCityOptionsSearch,
  setListCityOptionsSearch,
}) {
  const [chooseCitySearch, setChooseCitySearch] = useState(
    detailsUser ? detailsUser?.citiesSearchApartment : []
  );
  const [chooseCitySale, setChooseCitySale] = useState(
    detailsUser ? detailsUser?.citiesSaleApartment : []
  );

  const onChangeChekbox = (e, setListCity) => {
    setDetailsUser({
      ...detailsUser,
      [e.target.name]: e.target.checked,
    });
    setListCity([]);
  };

  useEffect(() => {
    setDetailsUser({
      ...detailsUser,
      citiesSearchApartment: chooseCitySearch,
      citiesSaleApartment: chooseCitySale,
    });
  }, [chooseCitySearch, chooseCitySale]);

  const area = [
    { value: "ארצי", title: "בכל הארץ" },
    { value: "ירושלים", title: "איזור ירושלים" },
    { value: "דרום", title: "איזור הדרום" },
    { value: "דרום", title: "איזור המרכז" },
    { value: "צפון", title: "איזור הצפון" },
  ];
  console.log(detailsUser);

  return (
    <div className="details_container">
      <div className="div-all-input">
        <Input
          label={" שם "}
          name={"nameUser"}
          onChange={onchange}
          formikErr={formik.errors.nameUser}
          width={"70%"}
          defaultValue={detailsUser?.nameUser}
        />

        <Input
          label={" מייל "}
          name={"mailUser"}
          onChange={onchange}
          formikErr={formik.errors.mailUser}
          width={"70%"}
          defaultValue={detailsUser?.mailUser}
        />

        <Input
          label={" טלפון "}
          name={"phoneUser"}
          onChange={(e) => {
            setDetailsUser({
              ...detailsUser,
              [e.target.name]:
                e.target.value.length > 1
                  ? parsePhoneNumber(e.target.value, "IL").formatNational()
                  : "0",
            });
          }}
          formikErr={formik.errors.phoneUser}
          width={"70%"}
          defaultValue={detailsUser?.phoneUser}
        />
      </div>

      <div className="div_all_checkbox">
        {/* <Checkbox
          name={"receivingMessages"}
          onChange={onChangeChekbox}
          label={"מקבל הודעות בטלפון:"}
          checked={detailsUser?.receivingMessages}
        /> */}
        {/* <Checkbox
          name={"receivingWTS"}
          onChange={onChangeChekbox}
          label={"מאפשר לפנות לקבלת מידע בווצאפ"}
          checked={detailsUser?.receivingWTS}
        /> */}
        <Checkbox
          name={"msgSearchApartment"}
          onChange={(e) => {
            onChangeChekbox(e, setChooseCitySearch);
          }}
          label={"מעוניין לקבל פניות של מחפשי דירה"}
          checked={detailsUser?.msgSearchApartment}
        />
        {/* <Select
          label={"בחר איזור בארץ"}
          disabledSelect={!detailsUser?.msgSearchApartment}
          name={"areaSearchApartment"}
          onChange={onchange}
          formikErr={formik.errors.areaSearchApartment}
          options={area}
          width={"90%"}
          value={detailsUser ? detailsUser?.areaSearchApartment : ""}
        />
 */}
        <ChooseMultipleCity
          formikErr={formik.errors.citiesSearchApartment}
          disabledInputSelect={!detailsUser?.msgSearchApartment}
          chooseCity={
            detailsUser ? detailsUser?.citiesSearchApartment : chooseCitySearch
          }
          setChooseCity={setChooseCitySearch}
          listCityOptions={listCityOptionsSale}
          setListCityOptions={setListCityOptionsSale}
        />
        <Checkbox
          name={"msgSaleApartment"}
          onChange={(e) => {
            onChangeChekbox(e, setChooseCitySale);
          }}
          label={"מעוניין לקבל מבצעים על הצעות דירות "}
          checked={detailsUser?.msgSaleApartment}
        />
        <ChooseMultipleCity
          formikErr={formik.errors.citiesSaleApartment}
          disabledInputSelect={!detailsUser?.msgSaleApartment}
          chooseCity={
            detailsUser ? detailsUser?.citiesSaleApartment : chooseCitySale
          }
          setChooseCity={setChooseCitySale}
          listCityOptions={listCityOptionsSearch}
          setListCityOptions={setListCityOptionsSearch}
        />
        {/* <Select
          label={"בחר איזור בארץ"}
          disabledSelect={!detailsUser?.msgSaleApartment}
          name={"areaSaleApartment"}
          onChange={onchange}
          formikErr={formik.errors.areaSaleApartment}
          options={area}
          width={"90%"}
          value={detailsUser ? detailsUser?.areaSaleApartment : ""}
        /> */}
      </div>
    </div>
  );
}

export default Content;
