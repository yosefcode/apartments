import React, { useState } from "react";
import "./editApartment.css";
import axios from "axios";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

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
  const editApartment = () => {
    axios.put("/api/holdApartment/" + id, { show: show }).then();
    setModalHold(false);
    setModalRemove(false);
    setStatus(status === true ? false : true);
  };
  return (
    <div className="editApartment">
      {" "}
      <button
        className="btn"
        onClick={() => {
          setModalHold(false);
          setModalRemove(false);
          setModalEdit(true);
        }}
      >
        ערוך מודעה
      </button>
      {modalEdit && (
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
      )}
    </div>
  );
};
export default EditApartment;
