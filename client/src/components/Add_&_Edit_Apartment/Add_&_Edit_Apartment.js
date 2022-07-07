import "./Add_&_Edit_Apartment.scss";
import React, { useState, useEffect, useContext } from "react";
import DetailsApartment from "./detailsApartment/detailsApartment";
import Contact from "./contact/contact";
import Images from "./images/images";
import SpecialApartment from "./Description/Description";
import * as Yup from "yup";
import { useFormik } from "formik";
import { AppContext } from "../../variable-Context";
import LoadingSpinning from "../loadingSpinning";
import { PutToServer, PostToServer } from "../getData";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { Button } from "../Input_select_button/Input_select_button";
import ModalTimeOut from "../ModalTimeOut/ModalTimeOut";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AddApartment({ itemForEdit, setIsOpenForEdit }) {
  const [response, setResponse] = useState();
  const { detailsUsers, uidFirebase } = useContext(AppContext);
  const [chooseCity, setChooseCity] = useState(
    itemForEdit?.city ? itemForEdit.city : ""
  );
  const [chooseStreet, setChooseStreet] = useState(
    itemForEdit?.street ? itemForEdit.street : ""
  );
  const [isLoading, setIsLoading] = useState(false);
  const [base64, setBase64] = useState([]);
  const [msgmodal, setMsgmodal] = useState(false);
  const [imgForEdit, setImgForEdit] = useState(
    itemForEdit ? itemForEdit?.images : []
  );
  const [listCityOptions, setListCityOptions] = useState(false);
  const [listStreetOptions, setListStreetOptions] = useState(false);

  useEffect(() => {
    if (response !== undefined) {
      setIsLoading(false);
      setMsgmodal(true);
    }
  }, [response]);

  const [apartment, setApartment] = useState({
    uidFirebase: uidFirebase,
    show: 0,
    nameApartment: itemForEdit ? itemForEdit.nameApartment : "",
    area: itemForEdit ? itemForEdit.area : "",
    city: itemForEdit ? itemForEdit.city : "",
    street: itemForEdit ? itemForEdit.street : "",
    rooms: itemForEdit ? itemForEdit.rooms : "",
    beds: itemForEdit ? itemForEdit.beds : "",
    priceMethod: itemForEdit ? itemForEdit.priceMethod : "",
    price: itemForEdit ? itemForEdit.price : "",
    short: itemForEdit ? itemForEdit.short : "",
    long: itemForEdit ? itemForEdit.long : "",
    special: itemForEdit ? itemForEdit.special : [],
    times: itemForEdit ? itemForEdit.times : [],
    webSite: itemForEdit ? itemForEdit.webSite : "",
    images: itemForEdit ? itemForEdit.images : [],
    name: itemForEdit ? itemForEdit.name : detailsUsers?.nameUser,
    mail: itemForEdit ? itemForEdit.mail : detailsUsers?.mailUser,
    phone: itemForEdit ? itemForEdit.phone : detailsUsers?.phoneUser,
  });
  // console.log(apartment);

  let urlImages = [];

  const formik = useFormik({
    initialValues: apartment,
    // enableReinitialize: true,
    // validationSchema: Yup.object({
    //   nameApartment: Yup.string()
    //     .min(3, "מינימום 3 תווים")
    //     .required("* שדה חובה"),
    //   area: Yup.string().min(2, "יש לבחור איזור").required("* שדה חובה"),
    //   city: Yup.string()
    //     .min(2, "יש לבחור עיר מתוך הרשימה")
    //     .required("* שדה חובה"),
    //   rooms: Yup.number()
    //     .min(1, "נא לציין מס' חדרים")
    //     .typeError("יש להקליד רק מספרים")
    //     .required("* שדה חובה"),
    //   beds: Yup.number()
    //     .min(1, "יש לציין מס' מיטות")
    //     .typeError("יש להקליד רק מספרים")
    //     .required("* שדה חובה"),
    //   priceMethod: Yup.string()
    //     .min(2, "חובה לציין סוג תמחור")
    //     .required("* שדה חובה"),
    //   price: Yup.number()
    //     .min(10, "יש לציין מחיר מינימום")
    //     .typeError("יש להקליד רק מספרים")
    //     .required("* שדה חובה"),
    //   short: Yup.string()
    //     .min(25, "תיאור קצר מינימום 25 תווים")
    //     .max(100, "תיאור קצר מקסימום 100 תווים")
    //     .required("* שדה חובה"),
    //   long: Yup.string()
    //     .min(150, "תאר בהרחבה מינימום 150 תווים")
    //     .required("* שדה חובה"),
    //   special: Yup.array()
    //     .min(5, "יש לסמן לפחות 5 דברים מתוך הרשימה הקיימים בדירה")
    //     .required("* שדה חובה"),
    //   times: Yup.array()
    //     .min(1, "יש לציין את זמני ההשכרה")
    //     .required("* שדה חובה"),
    //   // images: Yup.array()
    //   //   .min(3, "יש לצרף לפחות 3 תמונות")
    //   //   .required("* שדה חובה"),
    //   name: Yup.string().min(2, "מינימום 2 תווים").required("* שדה חובה"),
    //   mail: Yup.string().email("לא תקין").required("* שדה חובה"),
    //   phone: Yup.string()
    //     .required("* שדה חובה")
    //     .test("isValidNumber", "מס' אינו תקין", (phone) => {
    //       const parsedNumber =
    //         !!phone && parsePhoneNumberFromString(phone, "IL");
    //       return parsedNumber && parsedNumber.isValid() ? true : false;
    //     }),
    // }),
    onSubmit: (values) => {
      console.log(values);
      addApartment();
    },
  });

  const addApartment = async () => {
    setIsLoading(true);
    try {
      const data = new FormData();
      for (let i = 0; i < base64.length; i++) {
        let file = base64[i];

        data.append("file", file);
        data.append("upload_preset", "imagesApartments");
        data.append(
          "folder",
          `imagesApartments/${uidFirebase}/${apartment.nameApartment}`
        );
        await fetch(process.env.REACT_APP_URL_CLOUDINARY, {
          method: "post",
          body: data,
        })
          .then((resp) => resp.json())
          .then((data) => {
            urlImages.push(data.url);
          })
          .catch((err) => console.log(err));
      }
    } catch (err) {
      console.log(err);
    }
    const images =
      imgForEdit.length > 0
        ? { images: [...urlImages, ...imgForEdit] }
        : { images: urlImages };

    itemForEdit?._id
      ? PutToServer(
          `/api/editApartment/${itemForEdit._id}`,
          {
            ...apartment,
            ...images,
          },
          setResponse
        )
      : PostToServer(
          "/api/addApartment",
          {
            ...apartment,
            ...images,
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
      street: chooseStreet,
    });
  }, [chooseCity, chooseStreet]);

  return (
    <div
      style={{ width: "100%" }}
      onClick={() => {
        if (listCityOptions === true) setListCityOptions(false);
        if (listStreetOptions === true) setListStreetOptions(false);
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
              <div class="tab">
                <label class="tab-label" for="chck1">
                  פרטי הדירה{" "}
                </label>
                <div class="tab-content">
                  <DetailsApartment
                    setChooseCity={setChooseCity}
                    setChooseStreet={setChooseStreet}
                    chooseStreet={chooseStreet}
                    chooseCity={chooseCity}
                    formik={formik}
                    onchange={onchange}
                    itemForEdit={itemForEdit}
                    listCityOptions={listCityOptions}
                    setListCityOptions={setListCityOptions}
                    listStreetOptions={listStreetOptions}
                    setListStreetOptions={setListStreetOptions}
                  />{" "}
                </div>
              </div>

              <div class="tab">
                <label class="tab-label">תיאור</label>
                <div class="tab-content">
                  <SpecialApartment
                    apartment={apartment}
                    setApartment={setApartment}
                    formik={formik}
                    onchange={onchange}
                    itemForEdit={itemForEdit}
                  />
                </div>
              </div>

              <div class="tab">
                <label class="tab-label" for="chck3">
                  הוספת תמונות{" "}
                </label>
                <div class="tab-content">
                  <Images
                    apartment={apartment}
                    setApartment={setApartment}
                    base64={base64}
                    setBase64={setBase64}
                    formik={formik}
                    itemForEdit={itemForEdit}
                    imgForEdit={imgForEdit}
                    setImgForEdit={setImgForEdit}
                  />{" "}
                </div>
              </div>

              <div class="tab">
                <label class="tab-label" for="chck4">
                  פרטי יצירת קשר{" "}
                </label>
                <div class="tab-content">
                  <Contact
                    apartment={apartment}
                    setApartment={setApartment}
                    formik={formik}
                    onchange={onchange}
                    itemForEdit={itemForEdit}
                  />{" "}
                </div>
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

export default AddApartment;
