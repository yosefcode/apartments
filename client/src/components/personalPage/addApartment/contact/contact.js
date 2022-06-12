import "./contact.css";
import {
  parsePhoneNumber,
  AsYouType,
  findPhoneNumbersInText,
  parsePhoneNumberFromString,
} from "libphonenumber-js";

function Contact({ setApartment, apartment, formik }) {
  return (
    <div className="div-all-input">
      <div className="divInputDetails">
        <label className="labelInput">שם איש הקשר</label>
        <input
          className="inputDetails"
          type="text"
          name="name"
          onChange={formik.handleChange}
        />{" "}
        <div className="div_err_addApartment">{formik.errors.name}</div>
      </div>

      <div className="divInputDetails">
        <label className="labelInput">מייל</label>
        <input
          className="inputDetails"
          type="text"
          name="mail"
          onChange={formik.handleChange}
        />{" "}
        <div className="div_err_addApartment">{formik.errors.mail}</div>
      </div>

      <div className="divInputDetails">
        <label className="labelInput">טלפון</label>
        <input
          className="inputDetails"
          type="text"
          name="phone"
          onChange={(e) => {
            setApartment({
              ...apartment,
              [e.target.name]:
                e.target.value.length > 7
                  ? parsePhoneNumber(e.target.value, "IL").formatNational()
                  : "",
            });
          }}
        />
        <div className="div_err_addApartment">{formik.errors.phone}</div>
      </div>
    </div>
  );
}

export default Contact;
