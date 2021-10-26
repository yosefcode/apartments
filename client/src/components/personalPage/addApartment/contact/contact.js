import "./contact.css";
import {
  parsePhoneNumber,
  AsYouType,
  findPhoneNumbersInText,
} from "libphonenumber-js";

function Contact({ id, setApartment, apartment, onchange }) {
  return (
    <div className="div-all-input">
      <div className="divInputDetails">
        <label className="labelInput">שם איש הקשר</label>
        <input
          className="inputDetails"
          type="text"
          name="name"
          onChange={onchange}
        />{" "}
      </div>

      <div className="divInputDetails">
        <label className="labelInput">מייל</label>
        <input
          className="inputDetails"
          type="text"
          name="mail"
          onChange={onchange}
        />{" "}
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
      </div>
    </div>
  );
}

export default Contact;
