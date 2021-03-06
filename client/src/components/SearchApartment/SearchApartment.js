import "./SearchApartment.css";
import React, { useState, useEffect, useContext } from "react";
import DetailsSearchApartment from "./detailsSearchApartment/detailsSearchApartment";
import DetailsChangeApartment from "./detailsChangeApartment/detailsChangeApartment";
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
  const [chooseCityChange, setChooseCityChange] = useState(
    itemForEdit?.cityChange ? itemForEdit.cityChange : ""
  );
  const [chooseCity, setChooseCity] = useState(
    itemForEdit?.city ? itemForEdit.city : []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [msgmodal, setMsgmodal] = useState(false);
  const [listCityOptions, setListCityOptions] = useState(false);
  const [listCityChangeOptions, setListCityChangeOptions] = useState(false);

  useEffect(() => {
    if (response !== undefined) {
      setIsLoading(false);
      setMsgmodal(true);
    }
  }, [response]);

  const [apartment, setApartment] = useState({
    uidFirebase: uidFirebase,
    show: 0,
    model: itemForEdit ? itemForEdit.model : "",
    area: itemForEdit ? itemForEdit.area : "",
    city: itemForEdit ? itemForEdit.city : "",
    rooms: itemForEdit ? itemForEdit.rooms : "",
    beds: itemForEdit ? itemForEdit.beds : "",
    price: itemForEdit ? itemForEdit.price : "",
    long: itemForEdit ? itemForEdit.long : "",
    areaChange: itemForEdit ? itemForEdit.areaChange : "",
    cityChange: itemForEdit ? itemForEdit.cityChange : "",
    roomsChange: itemForEdit ? itemForEdit.roomsChange : "",
    bedsChange: itemForEdit ? itemForEdit.bedsChange : "",
    longChange: itemForEdit ? itemForEdit.longChange : "",
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
      model: Yup.string().min(1, "???????? ??????????").required("* ?????? ????????"),
      area: Yup.string().min(2, "???? ?????????? ??????????").required("* ?????? ????????"),
      beds: Yup.number()
        .min(1, "???? ?????????? ????' ??????????")
        .typeError("???? ???????????? ???? ????????????")
        .required("* ?????? ????????"),
      areaChange:
        apartment.model === "2" || apartment.model === "3"
          ? Yup.string().min(2, "???? ?????????? ??????????").required("* ?????? ????????")
          : null,
      cityChange:
        apartment.model === "2" || apartment.model === "3"
          ? Yup.string().min(1, "???? ?????????? ??????????").required("* ?????? ????????")
          : null,

      bedsChange:
        apartment.model === "2" || apartment.model === "3"
          ? Yup.number()
              .min(1, "???? ?????????? ????' ??????????")
              .typeError("???? ???????????? ???? ????????????")
              .required("* ?????? ????????")
          : null,

      roomsChange:
        apartment.model === "2" || apartment.model === "3"
          ? Yup.number()
              .min(1, "???? ?????????? ????' ??????????")
              .typeError("???? ???????????? ???? ????????????")
              .required("* ?????? ????????")
          : null,

      name: Yup.string().min(2, "?????????????? 2 ??????????").required("* ?????? ????????"),
      mail: Yup.string().email("???? ????????").required("* ?????? ????????"),
      phone: Yup.string()
        .required("* ?????? ????????")
        .test("isValidNumber", "????' ???????? ????????", (phone) => {
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
          `/api/editSearchApartment/${itemForEdit._id}`,
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
      cityChange: chooseCityChange,
    });
  }, [chooseCity, chooseCityChange]);

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
              <Baner content={"???????? ??????????"} />

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

              {apartment.model === "2" || apartment.model === "3" ? (
                <div>
                  <Baner content={"???????? ?????????? ????????"} />
                  <div class="content">
                    <DetailsChangeApartment
                      setChooseCityChange={setChooseCityChange}
                      chooseCityChange={chooseCityChange}
                      formik={formik}
                      onchange={onchange}
                      itemForEdit={itemForEdit}
                      listCityChangeOptions={listCityChangeOptions}
                      setListCityChangeOptions={setListCityChangeOptions}
                      apartment={apartment}
                      setApartment={setApartment}
                    />{" "}
                  </div>
                  <Baner content={"?????????????? ??????????????"} />
                  <div class="content">
                    <Calendar
                      apartment={apartment}
                      setApartment={setApartment}
                      itemForEdit={itemForEdit}
                    />{" "}
                  </div>{" "}
                </div>
              ) : null}

              <Baner content={"???????? ?????????? ??????"} />
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
                title={itemForEdit ? "???????? ??????????????" : "???????? ????????"}
                padding={"0.5rem 1.5rem"}
                borderRadius={"10px"}
                type={"submit"}
              />
              {itemForEdit ? (
                <Button
                  title={"?????? ??????????????"}
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
                <div>???????? ???????????? ???????????? ????????????.</div>
              ) : (
                <div>
                  ???????? ???????????? ?????????? ????????????.
                  <br />
                  <br /> ?????????? ?????????????? ???????? ???????? ???????? ???? ????????????
                  <br />
                  ???????? ???????????? ???????? ???????????? ?????? ???????????? ????????.
                  <br />
                  <br /> ?????? ?????????? ???????????????? ?????????? ?????????????? ???? ?????????? ?????????? ??????????.
                </div>
              )
            ) : (
              <div>
                ?????? ?????????? ???????????? ???? ????????????
                <br />
                <br />
                ???????? ?????????? ?????????? ?????????? ?????? ??????{" "}
              </div>
            )
          }
        />
      ) : null}
    </div>
  );
}

export default SearchApartment;
