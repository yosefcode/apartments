import "./addApartment.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import DetailsApartment from "./detailsApartment/detailsApartment";
import Contact from "./contact/contact";
import Images from "./images/images";
import SpecialApartment from "./‏specialApartment/‏specialApartment";
import * as Yup from "yup";
import { useFormik, Field } from "formik";
import {
  parsePhoneNumberFromString,
  parsePhoneNumber,
} from "libphonenumber-js";

function AddApartment({ id }) {
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

  const [valueCity, setValueCity] = useState("");
  const [valueStreet, setValueStreet] = useState("");

  const formik = useFormik({
    initialValues: apartment,
    enableReinitialize: true,
    validationSchema: Yup.object({
      // nameApartment: Yup.string()
      //   .min(3, "מינימום 3 תווים")
      //   .required("שדה חובה"),
      // area: Yup.string().min(2, "יש לבחור איזור").required("שדה חובה"),
      // city: Yup.string()
      //   .min(2, "יש לבחור עיר מתוך הרשימה")
      //   .required("שדה חובה"),
      // rooms: Yup.string().min(1, "נא לציין מס' חדרים").required("שדה חובה"),
      // beds: Yup.string().min(1, "יש לציין מס' מיטות").required("שדה חובה"),
      // priceMethod: Yup.string()
      //   .min(2, "חובה לציין סוג תמחור")
      //   .required("שדה חובה"),
      // price: Yup.string().min(2, "יש לציין מחיר מינימום").required("שדה חובה"),
      // short: Yup.string()
      //   .min(25, "תיאור קצר מינימום 25 תווים")
      //   .max(100, "תיאור קצר מקסימום 100 תווים")
      //   .required("שדה חובה"),
      // long: Yup.string()
      //   .min(150, "תאר בהרחבה מינימום 150 תווים")
      //   .required("שדה חובה"),
      // special: Yup.array()
      //   .min(5, "יש לסמן לפחות 5 דברים מתוך הרשימה הקיימים בדירה")
      //   .required("שדה חובה"),
      // times: Yup.array().min(1, "יש לציין את זמני ההשכרה").required("שדה חובה"),
      //   images: Yup.string()
      //   .min(2, "Must be 20 characters or less")
      //   .required("שדה חובה"),
      // name: Yup.string().min(2, "מינימום 2 תווים").required("שדה חובה"),
      // mail: Yup.string().email("לא תקין").required("שדה חובה"),
      // phone: Yup.string()
      //   .required("שדה חובה")
      //   .test("isValidNumber", "מס' אינו תקין", (phone) => {
      //     const parsedNumber =
      //       !!phone && parsePhoneNumberFromString(phone, "IL");
      //     return parsedNumber && parsedNumber.isValid() ? true : false;
      //   }),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log({
        ...values,
        uidFirebase: id,
        show: true,
      });
    },
  });
  // console.log(apartment);

  const addApartment = () => {
    console.log("add apartment", apartment);
    // axios.post("/api/addApartment/", apartment).then((res) => {});
  };

  useEffect(() => {
    setApartment({
      ...apartment,
      city: valueCity,
      street: valueStreet,
    });
  }, [valueCity, valueStreet]);

  localStorage.setItem(
    `addApartment`,
    JSON.stringify([
      // ...(JSON.parse(localStorage.getItem(`favorite`)) || []),
      apartment,
    ])
  );

  // console.log(apartment);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="addApartment">
        <div class="tabs">
          <div class="tab">
            <input type="checkbox" id="chck1" className="input-checkbox" />
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
              />{" "}
            </div>
          </div>
          <div class="tab">
            <input type="checkbox" id="chck2" className="input-checkbox" />
            <label class="tab-label" for="chck2">
              תיאור{" "}
            </label>
            <div class="tab-content">
              <SpecialApartment
                apartment={apartment}
                setApartment={setApartment}
                formik={formik}
              />{" "}
            </div>
          </div>

          <div class="tab">
            <input type="checkbox" id="chck3" className="input-checkbox" />
            <label class="tab-label" for="chck3">
              הוספת תמונות{" "}
            </label>
            <div class="tab-content">
              <Images
                id={id}
                apartment={apartment}
                setApartment={setApartment}
              />{" "}
            </div>
          </div>

          <div class="tab">
            <input type="checkbox" id="chck4" className="input-checkbox" />
            <label class="tab-label" for="chck4">
              פרטי איש קשר{" "}
            </label>
            <div class="tab-content">
              <Contact
                apartment={apartment}
                setApartment={setApartment}
                formik={formik}
              />{" "}
            </div>
          </div>

          <div class="tab">
            <input type="checkbox" id="chck5" className="input-checkbox" />
            <label class="tab-label" for="chck5">
              אישור וסיום{" "}
            </label>
            <div class="tab-content">
              <button type="submit" className="btn_send">
                {/* <button onClick={addApartment} className="btn_send"> */}
                הוסף דירה
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddApartment;
