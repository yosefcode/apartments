import "./Add_&_Edit_Apartment.scss";
import React, { useState, useEffect, useContext } from "react";
import DetailsApartment from "./detailsApartment/detailsApartment";
import Contact from "./contact/contact";
import Images from "./images/images";
import SpecialApartment from "./Description/Description";
import * as Yup from "yup";
import { useFormik } from "formik";
import CancelIcon from "@mui/icons-material/Cancel";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { AppContext } from "../../variable-Context";
import LoadingSpinning from "../loadingSpinning";
import axios from "axios";
import { PutToServer } from "../getData";
import { parsePhoneNumberFromString } from "libphonenumber-js";

function AddApartment({ itemForEdit, setIsOpenModal }) {
  const { userConnect, uidFirebase } = useContext(AppContext);
  const [valueCity, setValueCity] = useState("");
  const [valueStreet, setValueStreet] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [base64, setBase64] = useState([]);
  const [msgmodal, setMsgmodal] = useState(false);
  const [textMsgmodal, setTextMsgmodal] = useState(false);
  const [imgForEdit, setImgForEdit] = useState(
    itemForEdit ? itemForEdit?.images : []
  );

  // console.log(imgForEdit);
  // console.log(base64);
  // console.log(itemForEdit);

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      setMsgmodal(false);
    }

    return (
      <div className="timer">
        <CancelIcon
          style={{ fontSize: 28 }}
          onClick={() => {
            setMsgmodal(false);
            setIsLoading(false);
          }}
        />
      </div>
    );
  };

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
    images: itemForEdit ? itemForEdit.images : [],
    name: itemForEdit ? itemForEdit.name : userConnect?.nameUser,
    mail: itemForEdit ? itemForEdit.mail : userConnect?.mailUser,
    phone: itemForEdit ? itemForEdit.phone : userConnect?.phoneUser,
  });
  // console.log(apartment);

  let urlImages = [];

  const formik = useFormik({
    initialValues: apartment,
    enableReinitialize: true,
    validationSchema: Yup.object({
      nameApartment: Yup.string()
        .min(3, "מינימום 3 תווים")
        .required("* שדה חובה"),
      area: Yup.string().min(2, "יש לבחור איזור").required("* שדה חובה"),
      city: Yup.string()
        .min(2, "יש לבחור עיר מתוך הרשימה")
        .required("* שדה חובה"),
      rooms: Yup.number()
        .min(1, "נא לציין מס' חדרים")
        .typeError("יש להקליד רק מספרים")
        .required("* שדה חובה"),
      beds: Yup.number()
        .min(1, "יש לציין מס' מיטות")
        .typeError("יש להקליד רק מספרים")
        .required("* שדה חובה"),
      priceMethod: Yup.string()
        .min(2, "חובה לציין סוג תמחור")
        .required("* שדה חובה"),
      price: Yup.number()
        .min(10, "יש לציין מחיר מינימום")
        .typeError("יש להקליד רק מספרים")
        .required("* שדה חובה"),
      short: Yup.string()
        .min(25, "תיאור קצר מינימום 25 תווים")
        .max(100, "תיאור קצר מקסימום 100 תווים")
        .required("* שדה חובה"),
      long: Yup.string()
        .min(150, "תאר בהרחבה מינימום 150 תווים")
        .required("* שדה חובה"),
      special: Yup.array()
        .min(5, "יש לסמן לפחות 5 דברים מתוך הרשימה הקיימים בדירה")
        .required("* שדה חובה"),
      times: Yup.array()
        .min(1, "יש לציין את זמני ההשכרה")
        .required("* שדה חובה"),
      images: Yup.array()
        .min(3, "יש לצרף לפחות 3 תמונות")
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
        await fetch("https://api.cloudinary.com/v1_1/dnlwa7r5c/image/upload/", {
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
    itemForEdit._id
      ? PutToServer(`/api/editApartment/${itemForEdit._id}`, {
          ...apartment,
          ...images,
        })
      : axios
          .post("/api/addApartment/", {
            ...apartment,
            ...images,
          })
          .then((res) => {
            if (res.status !== 200 || !res.data.uidFirebase) {
              setMsgmodal(true);
              setIsLoading(false);
            } else {
              setBase64([]);
              setTextMsgmodal(true);
              setMsgmodal(true);
              setIsLoading(false);
            }
          });
    console.log({ ...apartment, images: [...urlImages, ...imgForEdit] });
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
      city: valueCity,
      street: valueStreet,
    });
  }, [valueCity, valueStreet]);

  return (
    <div className="addApartment">
      {!isLoading && !msgmodal ? (
        <form onSubmit={formik.handleSubmit}>
          <div class="tabs">
            <div class="tab">
              <label class="tab-label" for="chck1">
                פרטי הדירה{" "}
              </label>
              <div class="tab-content">
                <DetailsApartment
                  setValueCity={setValueCity}
                  setValueStreet={setValueStreet}
                  valueStreet={valueStreet}
                  valueCity={valueCity}
                  formik={formik}
                  onchange={onchange}
                  itemForEdit={itemForEdit}
                />{" "}
              </div>
            </div>

            <div class="tab">
              <label class="tab-label" for="chck2">
                תיאור{" "}
              </label>
              <div class="tab-content">
                <SpecialApartment
                  apartment={apartment}
                  setApartment={setApartment}
                  formik={formik}
                  onchange={onchange}
                  itemForEdit={itemForEdit}
                />{" "}
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
                פרטי איש קשר{" "}
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
          <div class="tab-content">
            <button type="submit" className="btn_send">
              {itemForEdit ? "שמור שינויים" : "פרסם דירה"}
            </button>
            {itemForEdit ? (
              <button
                className="btn_send"
                onClick={() => setIsOpenModal(false)}
              >
                ביטול
              </button>
            ) : null}
          </div>
        </form>
      ) : isLoading ? (
        <LoadingSpinning />
      ) : msgmodal ? (
        <div className="msgmodal">
          <div className="timer-wrapper">
            <CountdownCircleTimer
              isPlaying
              duration={10}
              colors={[["#8a8a8a"]]}
              onComplete={() => [true, 1000]}
              size={32}
              strokeWidth={6}
            >
              {renderTime}
            </CountdownCircleTimer>
          </div>
          <div className="text-msgmodal">
            {textMsgmodal ? (
              <div>
                {" "}
                פרטי המודעה נשלחו בהצלחה.
                <br />
                <br /> בדקות הקרובות צוות האתר יבחן את המודעה
                <br />
                ובאם המודעה תמצא מתאימה היא תפורסם באתר.
                <br />
                <br /> אנו שמחים שהצטרפתם אלינו ומקווים כי תפיקו תועלת מהאתר.
                <br />
              </div>
            ) : (
              <div>
                עקב שגיאה המודעה לא נשלחה
                <br />
                <br />
                ניתן לפנות אלינו בטופס צור קשר{" "}
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default AddApartment;
