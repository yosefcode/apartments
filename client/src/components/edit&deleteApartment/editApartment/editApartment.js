import React, { useState } from "react";
import "./editApartment.css";
import axios from "axios";
import DetailsApartment from "./detailsApartment/detailsApartment";
import Contact from "./contact/contact";
import Images from "./images/images";
import SpecialApartment from "./‏specialApartment/‏specialApartment";

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
  const [valueCity, setValueCity] = useState("");
  const [valueStreet, setValueStreet] = useState("");

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
      <div>
        <div className="header_edit">פרטים</div>{" "}
        <DetailsApartment
          list={list}
          newApartment={newApartment}
          setNewApartment={setNewApartment}
          onchange={onchange}
          setValueCity={setValueCity}
          setValueStreet={setValueStreet}
          valueStreet={valueStreet}
          valueCity={valueCity}
        />{" "}
        <div className="header_edit">תיאור</div>{" "}
        <SpecialApartment
          list={list}
          newApartment={newApartment}
          setNewApartment={setNewApartment}
          onchange={onchange}
        />{" "}
        <div className="header_edit">תמונות</div>{" "}
        <div className="div-img">
          {list.images.map((img) => (
            <div>
              {/* <CancelIcon className="delete_img" style={{ fontSize: "3rem" }} /> */}
              <img src={img} alt="" className="img"></img>
            </div>
          ))}
        </div>
        <div className="header_edit">פרטי איש קשר</div>{" "}
        <Contact
          list={list}
          newApartment={newApartment}
          setNewApartment={setNewApartment}
          onchange={onchange}
        />{" "}
      </div>

      <button onClick={editApartment}>שמור שינויים</button>
    </div>
  );
};
export default EditApartment;
