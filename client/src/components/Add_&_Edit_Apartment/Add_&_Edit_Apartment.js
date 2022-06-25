import "./Add_&_Edit_Apartment.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import DetailsApartment from "./detailsApartment/detailsApartment";
import Contact from "./contact/contact";
import Images from "./images/images";
import SpecialApartment from "./‏specialApartment/‏specialApartment";
import * as Yup from "yup";
import { useFormik } from "formik";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { SpinningCircles } from "react-loading-icons";
import CancelIcon from "@mui/icons-material/Cancel";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function AddApartment({ id, apiUserForFirebase }) {
  const [valueCity, setValueCity] = useState("");
  const [valueStreet, setValueStreet] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [base64, setBase64] = useState([]);
  const [msgmodal, setMsgmodal] = useState(false);
  const [textMsgmodal, setTextMsgmodal] = useState(false);

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
    nameApartment: "",
    area: "",
    city: "",
    rooms: "",
    beds: "",
    priceMethod: "",
    price: "",
    short: "",
    long: "",
    special: [],
    times: [],
    images: [],
    name: "",
    mail: "",
    phone: "",
  });
  // console.log(apartment);

  let urlImages = [];

  const formik = useFormik({
    initialValues: apartment,
    enableReinitialize: true,
    validationSchema: Yup.object({
      // nameApartment: Yup.string()
      //   .min(3, "מינימום 3 תווים")
      //   .required("* שדה חובה"),
      // area: Yup.string().min(2, "יש לבחור איזור").required("* שדה חובה"),
      // city: Yup.string()
      //   .min(2, "יש לבחור עיר מתוך הרשימה")
      //   .required("* שדה חובה"),
      // rooms: Yup.number()
      //   .min(1, "נא לציין מס' חדרים")
      //   .typeError("יש להקליד רק מספרים")
      //   .required("* שדה חובה"),
      // beds: Yup.number()
      //   .min(1, "יש לציין מס' מיטות")
      //   .typeError("יש להקליד רק מספרים")
      //   .required("* שדה חובה"),
      // priceMethod: Yup.string()
      //   .min(2, "חובה לציין סוג תמחור")
      //   .required("* שדה חובה"),
      // price: Yup.number()
      //   .min(10, "יש לציין מחיר מינימום")
      //   .typeError("יש להקליד רק מספרים")
      //   .required("* שדה חובה"),
      // short: Yup.string()
      //   .min(25, "תיאור קצר מינימום 25 תווים")
      //   .max(100, "תיאור קצר מקסימום 100 תווים")
      //   .required("* שדה חובה"),
      // long: Yup.string()
      //   .min(150, "תאר בהרחבה מינימום 150 תווים")
      //   .required("* שדה חובה"),
      // special: Yup.array()
      //   .min(5, "יש לסמן לפחות 5 דברים מתוך הרשימה הקיימים בדירה")
      //   .required("* שדה חובה"),
      // times: Yup.array()
      //   .min(1, "יש לציין את זמני ההשכרה")
      //   .required("* שדה חובה"),
      // images: Yup.array()
      //   .min(3, "יש לצרף לפחות 3 תמונות")
      //   .required("* שדה חובה"),
      // name: Yup.string().min(2, "מינימום 2 תווים").required("* שדה חובה"),
      // mail: Yup.string().email("לא תקין").required("* שדה חובה"),
      // phone: Yup.string()
      //   .required("* שדה חובה")
      //   .test("isValidNumber", "מס' אינו תקין", (phone) => {
      //     const parsedNumber =
      //       !!phone && parsePhoneNumberFromString(phone, "IL");
      //     return parsedNumber && parsedNumber.isValid() ? true : false;
      //   }),
    }),
    onSubmit: (values) => {
      console.log(values);
      // addApartment();
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
          `imagesApartments/${id}/${apartment.nameApartment}`
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
    axios
      .post("/api/addApartment/", { ...apartment, images: urlImages })
      .then((res) => {
        if (res.status !== 200 || !res.data.uidFirebase) {
          setMsgmodal(true);
          setIsLoading(false);
        } else {
          setTextMsgmodal(true);
          setMsgmodal(true);
          setIsLoading(false);
        }
      });
  };

  const onchange = (e) => {
    setApartment({
      ...apartment,
      uidFirebase: id,
      show: 0,
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
              {/* <input type="checkbox" id="chck1" className="input-checkbox" /> */}
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
                />{" "}
              </div>
            </div>

            <div class="tab">
              {/* <input type="checkbox" id="chck2" className="input-checkbox" /> */}
              <label class="tab-label" for="chck2">
                תיאור{" "}
              </label>
              <div class="tab-content">
                <SpecialApartment
                  apartment={apartment}
                  setApartment={setApartment}
                  formik={formik}
                  onchange={onchange}
                />{" "}
              </div>
            </div>

            <div class="tab">
              {/* <input type="checkbox" id="chck3" className="input-checkbox" /> */}
              <label class="tab-label" for="chck3">
                הוספת תמונות{" "}
              </label>
              <div class="tab-content">
                <Images
                  id={id}
                  apartment={apartment}
                  setApartment={setApartment}
                  base64={base64}
                  setBase64={setBase64}
                  formik={formik}
                />{" "}
              </div>
            </div>

            <div class="tab">
              {/* <input type="checkbox" id="chck4" className="input-checkbox" /> */}
              <label class="tab-label" for="chck4">
                פרטי איש קשר{" "}
              </label>
              <div class="tab-content">
                <Contact
                  apartment={apartment}
                  setApartment={setApartment}
                  formik={formik}
                  onchange={onchange}
                  apiUserForFirebase={apiUserForFirebase}
                />{" "}
              </div>
            </div>

            {/* <div class="tab">
            <input type="checkbox" id="chck5" className="input-checkbox" />
            <label class="tab-label" for="chck5">
              אישור וסיום{" "}
            </label>
          </div> */}
          </div>
          <div class="tab-content">
            <button type="submit" className="btn_send">
              פרסם דירה
            </button>
          </div>
        </form>
      ) : isLoading ? (
        <div className="loading">
          <SpinningCircles
            height="4em"
            width="4em"
            fill="rgb(28, 2, 99)"
            stroke="rgb(28, 2, 99)"
            strokeOpacity={1}
            fillOpacity={1}
            speed={1}
          />
        </div>
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
