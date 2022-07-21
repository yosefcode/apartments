import "./SearchApartment.css";
import React, { useState, useEffect, useContext } from "react";
import DetailsSearchApartment from "./detailsSearchApartment/detailsSearchApartment";
import Contact from "./contact/contact";
import * as Yup from "yup";
import { useFormik } from "formik";
import { AppContext } from "../../variable-Context";
import LoadingSpinning from "../loadingSpinning";
import { PutToServer, PostToServer } from "../getData";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { Button } from "../Input_select_button/Input_select_button";
import ModalTimeOut from "../ModalTimeOut/ModalTimeOut";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Baner from "../baner";
import Calendar from "./calendar";

function SearchApartment({ itemForEdit, setIsOpenForEdit }) {
  const [response, setResponse] = useState();
  const { detailsUsers, uidFirebase } = useContext(AppContext);
  const [chooseCity, setChooseCity] = useState(
    itemForEdit?.city ? itemForEdit.city : []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [msgmodal, setMsgmodal] = useState(false);
  const [listCityOptions, setListCityOptions] = useState(false);

  useEffect(() => {
    if (response !== undefined) {
      setIsLoading(false);
      setMsgmodal(true);
    }
  }, [response]);

  const [apartment, setApartment] = useState({
    uidFirebase: uidFirebase,
    show: 0,
    area: itemForEdit ? itemForEdit.area : "",
    city: itemForEdit ? itemForEdit.city : "",
    rooms: itemForEdit ? itemForEdit.rooms : "",
    beds: itemForEdit ? itemForEdit.beds : "",
    price: itemForEdit ? itemForEdit.price : "",
    long: itemForEdit ? itemForEdit.long : "",
    dateBusy: itemForEdit ? itemForEdit.dateBusy : [],
    name: itemForEdit ? itemForEdit.name : detailsUsers?.nameUser,
    mail: itemForEdit ? itemForEdit.mail : detailsUsers?.mailUser,
    phone: itemForEdit ? itemForEdit.phone : detailsUsers?.phoneUser,
  });
  // console.log(apartment);

  const formik = useFormik({
    initialValues: apartment,
    enableReinitialize: true,
    validationSchema: Yup.object({
      area: Yup.string().min(2, "יש לבחור איזור").required("* שדה חובה"),
      beds: Yup.number()
        .min(1, "יש לציין מס' מיטות")
        .typeError("יש להקליד רק מספרים")
        .required("* שדה חובה"),
      name: Yup.string().min(2, "מינימום 2 תווים").required("* שדה חובה"),
      mail: Yup.string().email("לא תקין").required("* שדה חובה"),
      phone: Yup.string()
        .required("* שדה חובה")
        .test("isValidNumber", "מס' אינו תקין", (phone) => {
          const parsedNumber =
            !!phone && parsePhoneNumberFromString(phone, "IL");
          return parsedNumber && parsedNumber.isValid() ? true : false;
        }),
    }),
    onSubmit: (values) => {
      console.log(values);
      addApartment();
    },
  });

  const addApartment = async () => {
    setIsLoading(true);
    itemForEdit?._id
      ? PutToServer(
          `/api/editApartment/${itemForEdit._id}`,
          {
            ...apartment,
          },
          setResponse
        )
      : PostToServer(
          "/api/searchApartment",
          {
            ...apartment,
          },
          null,
          setResponse
        );
  };

  const onchange = (e) => {
    setApartment({
      ...apartment,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setApartment({
      ...apartment,
      city: chooseCity,
    });
  }, [chooseCity]);

  return (
    <div
      style={{ width: "100%" }}
      onClick={() => {
        if (listCityOptions === true) setListCityOptions(false);
      }}
    >
      {!isLoading && !msgmodal ? (
        <div className="addApartment" style={{ width: "100%" }}>
          {itemForEdit ? (
            <div
              onClick={() => {
                setIsOpenForEdit(false);
              }}
            >
              <ExpandMoreIcon
                sx={{
                  fontSize: "4rem",
                  marginInline: "10px",
                  color: "black",
                  transform: "rotate(270deg)",
                  cursor: "pointer",
                }}
              />
            </div>
          ) : null}
          <form onSubmit={formik.handleSubmit}>
            <div class="tabs">
              <Baner content={"פרטי הדירה"} />

              <div class="content">
                <DetailsSearchApartment
                  setChooseCity={setChooseCity}
                  chooseCity={chooseCity}
                  formik={formik}
                  onchange={onchange}
                  itemForEdit={itemForEdit}
                  listCityOptions={listCityOptions}
                  setListCityOptions={setListCityOptions}
                  apartment={apartment}
                  setApartment={setApartment}
                />{" "}
              </div>

              <Baner content={"תאריכים מבוקשים"} />
              <div class="content">
                <Calendar
                  apartment={apartment}
                  setApartment={setApartment}
                  itemForEdit={itemForEdit}
                />{" "}
              </div>

              <Baner content={"פרטי יצירת קשר"} />
              <div class="content">
                <Contact
                  apartment={apartment}
                  setApartment={setApartment}
                  formik={formik}
                  onchange={onchange}
                  itemForEdit={itemForEdit}
                />{" "}
              </div>
            </div>

            <div class="div_btns">
              <Button
                title={itemForEdit ? "שמור שינויים" : "פרסם דירה"}
                padding={"0.5rem 1.5rem"}
                borderRadius={"10px"}
                type={"submit"}
              />
              {itemForEdit ? (
                <Button
                  title={"בטל שינויים"}
                  padding={"0.5rem 1.5rem"}
                  borderRadius={"10px"}
                  onClick={() => setIsOpenForEdit(false)}
                />
              ) : null}
            </div>
          </form>
        </div>
      ) : isLoading ? (
        <LoadingSpinning />
      ) : msgmodal ? (
        <ModalTimeOut
          duration={10}
          setIsOpenModalTimeOut={itemForEdit ? setIsOpenForEdit : setMsgmodal}
          textMsgModalTimeOut={
            response?.status === 200 ? (
              itemForEdit ? (
                <div>פרטי המודעה עודכנו בהצלחה.</div>
              ) : (
                <div>
                  פרטי המודעה נשלחו בהצלחה.
                  <br />
                  <br /> בדקות הקרובות צוות האתר יבחן את המודעה
                  <br />
                  ובאם המודעה תמצא מתאימה היא תפורסם באתר.
                  <br />
                  <br /> אנו שמחים שהצטרפתם אלינו ומקווים כי תפיקו תועלת מהאתר.
                </div>
              )
            ) : (
              <div>
                עקב שגיאה המודעה לא עודכנה
                <br />
                <br />
                ניתן לפנות אלינו בטופס צור קשר{" "}
              </div>
            )
          }
        />
      ) : null}
    </div>
  );
}

export default SearchApartment;
