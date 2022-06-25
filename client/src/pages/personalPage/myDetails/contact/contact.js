import "./contact.css";
import { parsePhoneNumber } from "libphonenumber-js";
import { useState, useEffect } from "react";

function Contact({
  setDetailsUser,
  detailsUser,
  formik,
  onchange,
  apiUserForFirebase,
}) {
  const onChangeChekbox = (e) => {
    setDetailsUser({
      ...detailsUser,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="contact_container">
        <div className="div-all-input">
          <div className="divInputDetails">
            <label className="labelInput">שם</label>
            <input
              defaultValue={apiUserForFirebase?.displayName}
              className="inputDetails"
              type="text"
              name="nameUser"
              onChange={onchange}
            />{" "}
            <div className="div_err_addApartment">{formik.errors.nameUser}</div>
          </div>

          <div className="divInputDetails">
            <label className="labelInput">מייל</label>
            <input
              defaultValue={apiUserForFirebase?.email}
              className="inputDetails"
              type="text"
              name="mailUser"
              onChange={onchange}
            />{" "}
            <div className="div_err_addApartment">{formik.errors.mailUser}</div>
          </div>

          <div className="divInputDetails">
            <label className="labelInput">טלפון</label>
            <input
              className="inputDetails"
              type="text"
              name="phoneUser"
              onChange={(e) => {
                setDetailsUser({
                  ...detailsUser,
                  [e.target.name]:
                    e.target.value.length > 1
                      ? parsePhoneNumber(e.target.value, "IL").formatNational()
                      : "0",
                });
              }}
            />
            <div className="div_err_addApartment">
              {formik.errors.phoneUser}
            </div>
          </div>
        </div>

        <div className="div_all_checkbox">
          <div className="div_checkbox">
            <input
              type="checkbox"
              name="receivingMessages"
              onChange={onChangeChekbox}
            />
            <label> מקבל הודעות בטלפון:</label>
          </div>

          <div className="div_checkbox">
            <input
              type="checkbox"
              name="receivingWTS"
              onChange={onChangeChekbox}
            />
            <label> מקבל הודעות וצאפ:</label>
          </div>

          <div className="div_checkbox">
            <input
              type="checkbox"
              name="msgSearchApartment"
              onChange={onChangeChekbox}
            />
            <label> מעוניין לקבל הצעות על כאלה שמחפשים דירה </label>
          </div>

          {detailsUser.msgSearchApartment && (
            <div className="divInputDetails">
              <label className="labelInput">בחר איזור בארץ</label>
              <select
                className="inputDetails"
                id="width-select"
                name="areaSearchApartment"
                onChange={onchange}
              >
                <option value={""} disabled selected></option>
                <option value={"ארצי"}>בכל הארץ</option>
                <option value={"ירושלים"}>איזור ירושלים</option>
                <option value={"דרום"}>איזור הדרום</option>
                <option value={"מרכז"}>איזור המרכז</option>
                <option value={"צפון"}>איזור הצפון</option>
              </select>
              <div className="div_err_addApartment">{formik.errors.area}</div>
            </div>
          )}

          <div className="div_checkbox">
            <input
              type="checkbox"
              name="msgSaleApartment"
              onChange={onChangeChekbox}
            />
            <label> מעוניין לקבל מבצעים על הצעות דירות </label>
          </div>

          {detailsUser.msgSaleApartment && (
            <div className="divInputDetails">
              <label className="labelInput">בחר איזור בארץ</label>
              <select
                className="inputDetails"
                id="width-select"
                name="areaSaleApartment"
                onChange={onchange}
              >
                <option value={""} disabled selected></option>
                <option value={"ארצי"}>בכל הארץ</option>
                <option value={"ירושלים"}>איזור ירושלים</option>
                <option value={"דרום"}>איזור הדרום</option>
                <option value={"מרכז"}>איזור המרכז</option>
                <option value={"צפון"}>איזור הצפון</option>
              </select>
              <div className="div_err_addApartment">{formik.errors.area}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
