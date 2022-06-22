import "./contact.css";
import {
  parsePhoneNumber,
  AsYouType,
  findPhoneNumbersInText,
} from "libphonenumber-js";

function Contact({ list, setNewApartment, newApartment, onchange }) {
  return (
    <div className="div-all-input">
      <div className="divInputDetails">
        <label className="labelInput">שם איש הקשר</label>
        <input
          defaultValue={list.name}
          className="inputDetails"
          type="text"
          name="name"
          onChange={onchange}
        />{" "}
      </div>

      <div className="divInputDetails">
        <label className="labelInput">מייל</label>
        <input
          defaultValue={list.mail}
          className="inputDetails"
          type="text"
          name="mail"
          onChange={onchange}
        />{" "}
      </div>

      <div className="divInputDetails">
        <label className="labelInput">טלפון</label>
        <input
          defaultValue={list.phone}
          className="inputDetails"
          type="text"
          name="phone"
          onChange={(e) => {
            setNewApartment({
              ...newApartment,
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
