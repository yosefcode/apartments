import "./contact.css";
import { parsePhoneNumber } from "libphonenumber-js";

function Contact({
  setApartment,
  apartment,
  formik,
  onchange,
  apiUserForFirebade,
}) {
  return (
    <div className="div-all-input">
      <div className="divInputDetails">
        <label className="labelInput">שם איש הקשר</label>
        <input
          defaultValue={apiUserForFirebade?.displayName}
          className="inputDetails"
          type="text"
          name="name"
          onChange={onchange}
        />{" "}
        <div className="div_err_addApartment">{formik.errors.name}</div>
      </div>

      <div className="divInputDetails">
        <label className="labelInput">מייל</label>
        <input
          defaultValue={apiUserForFirebade?.email}
          className="inputDetails"
          type="text"
          name="mail"
          onChange={onchange}
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
                e.target.value.length > 1
                  ? parsePhoneNumber(e.target.value, "IL").formatNational()
                  : "0",
            });
          }}
        />
        <div className="div_err_addApartment">{formik.errors.phone}</div>
      </div>
    </div>
  );
}

export default Contact;
