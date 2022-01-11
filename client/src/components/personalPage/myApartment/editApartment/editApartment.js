import React, { useState } from "react";
import "./editApartment.css";
import axios from "axios";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  parsePhoneNumber,
  AsYouType,
  findPhoneNumbersInText,
} from "libphonenumber-js";

const EditApartment = ({
  id,
  show,
  setStatus,
  status,
  setModalHold,
  setModalRemove,
  modalEdit,
  setModalEdit,
  list,
}) => {
  // const newApartment = {};
  const [newApartment, setNewApartment] = useState([]);

  const onchange = (e) => {
    setNewApartment({ ...newApartment, [e.target.name]: e.target.value });
  };
  // console.log(newApartment);

  const editApartment = () => {
    axios.put("/api/editApartment/" + list._id, newApartment).then();
    // setModalHold(false);
    // setModalRemove(false);
    // setStatus(status === true ? false : true);
  };

  return (
    <div className="editApartment">
      <div className="div-all-input">
        <button onClick={editApartment}>ddddd</button>
        <div className="header_edit">פרטים</div>{" "}
        <div className="divInputDetails">
          <label className="labelInput">שם מקום האירוח</label>
          <input
            defaultValue={list.nameApartment}
            className="inputDetails"
            placeholder="לדוגמא: דירה ברמה"
            type="text"
            name="nameApartment"
            onChange={onchange}
          />
        </div>
        <div className="divInputDetails">
          <label className="labelInput">בחר איזור בארץ</label>
          <select
            defaultValue={list.area}
            className="inputDetails"
            id="width-select"
            name="area"
            onChange={onchange}
          >
            <option value={""} disabled selected></option>
            <option value={"ירושלים"}>איזור ירושלים</option>
            <option value={"דרום"}>איזור הדרום</option>
            <option value={"מרכז"}>איזור המרכז</option>
            <option value={"צפון"}>איזור הצפון</option>
          </select>
        </div>
        <div className="divInputDetails">
          <label className="labelInput">בחר עיר</label>
          <select
            defaultValue={list.city}
            className="inputDetails"
            id="width-select"
            name="city"
            onChange={onchange}
          >
            {" "}
            <option value={""} disabled selected></option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="divInputDetails">
          <label className="labelInput">מס' חדרים</label>
          <input
            defaultValue={list.rooms}
            className="inputDetails"
            type="text"
            name="rooms"
            onChange={onchange}
          />
        </div>
        <div className="divInputDetails">
          <label className="labelInput">מס' מיטות</label>
          <input
            defaultValue={list.beds}
            className="inputDetails"
            type="text"
            name="beds"
            onChange={onchange}
          />
        </div>
        <div className="divInputDetails">
          <label className="labelInput">תמחור לפי</label>
          <select
            defaultValue={list.priceMethod}
            className="inputDetails"
            id="width-select"
            name="priceMethod"
            onChange={onchange}
          >
            <option value={""} disabled selected></option>
            <option value={"מיטה"}>מיטה</option>
            <option value={"זוג"}>זוג</option>
            <option value={"לילה"}>לילה</option>
            <option value={"אדם"}>אדם</option>
            <option value={"דירה"}>דירה</option>
          </select>
        </div>
        <div className="divInputDetails">
          <label className="labelInput">מחיר</label>
          <input
            defaultValue={list.price}
            className="inputDetails"
            type="text"
            name="price"
            onChange={onchange}
          />
        </div>{" "}
        <div className="header_edit">תיאור</div>{" "}
        <div className="div-textarea-Details">
          <label className="labelInput">תיאור קצר</label>
          <div
            onInput={(e) => {
              setNewApartment({
                ...newApartment,
                short: e.currentTarget.textContent,
              });
            }}
            id="short"
            className="textarea"
            contentEditable
            placeholder="כתבו תיאור קצר על מקום האירוח (עד 100 תווים)"
          >
            {list.short}
          </div>
        </div>
        <div className="div-textarea-Details">
          <label className="labelInput">תיאור ארוך</label>
          <div
            onInput={(e) => {
              setNewApartment({
                ...newApartment,
                long: e.currentTarget.textContent,
              });
            }}
            id="long"
            className="textarea"
            contentEditable
            placeholder="ספרו בהרחבה על מקום האירוח"
          >
            {list.long}
          </div>
        </div>
        <div className="div-textarea-Details">
          <label className="labelInput">המיוחדים שלנו</label>
          <div className="special">
            {list.special.map((special) => (
              <li>
                <CheckBoxIcon
                  style={{
                    fontSize: "1.2vw",
                    position: "relative",
                    top: "0.4vw",
                    color: "green",
                  }}
                />{" "}
                {special}
              </li>
            ))}

            {/* {specials.map((specials) => (
            <div>
              <input
                type="checkbox"
                value={specials}
                onChange={(event) => {
                  let test = special.find((e) => e === event.target.value);
                  if (!test) {
                    special.push(event.target.value);
                    setApartment({
                      ...apartment,
                      special: special,
                    });
                  } else {
                    let filter = special.filter(
                      (e) => e !== event.target.value
                    );
                    setSpecial(filter);
                    setApartment({
                      ...apartment,
                      special: filter,
                    });
                  }
                }}
              />
              <label for="vehicle1">{specials}</label>
            </div>
          ))} */}
          </div>
        </div>
        <div className="header_edit">תמונות</div>{" "}
        <div className="div-img">
          {list.images.map((img) => (
            <div>
              <CancelIcon className="delete_img" style={{ fontSize: "3rem" }} />
              <img src={img} alt="" className="img"></img>
            </div>
          ))}
        </div>
        <div className="header_edit">פרטי איש קשר</div>{" "}
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
      {/* {modalEdit && (
        <div className="divModel">
          {" "}
          <button
            className="btn"
            onClick={() => {
              setModalHold(false);
              setModalRemove(false);
              setModalEdit(false);
            }}
          >
            xxxxx{" "}
          </button>
          <div className="edit-info-apartment">
            {list.area}, {list.city}.<br />
            {list.rooms} חדרים, עד {list.beds} מיטות.
            <br /> החל מ{list.price} ש"ח ל{list.priceMethod}.<br />
            <br />
            {list.long}
            <br />
            <div className="special">
              {list.special.map((special) => (
                <li>
                  <CheckBoxIcon
                    style={{
                      fontSize: "1.2vw",
                      position: "relative",
                      top: "0.4vw",
                      color: "green",
                    }}
                  />{" "}
                  {special}
                </li>
              ))}
            </div>
            <div className="div-img">
              {list.images.map((img) => (
                <img src={img} alt="" className="img" />
              ))}
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};
export default EditApartment;
