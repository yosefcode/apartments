import React, { useState } from "react";
import "./holdApartment.css";
import axios from "axios";

const HoldApartment = ({
  id,
  show,
  setStatus,
  status,
  modalHold,
  setModalHold,
  setModalRemove,
}) => {
  const holdApartment = () => {
    axios.put("/api/holdApartment/" + id, { show: show }).then();
    setModalHold(false);
    setStatus(status === true ? false : true);
  };
  return (
    <div className="holdApartment">
      <button
        className="btn"
        onClick={() => {
          if (show === true) {
            setModalHold(true);
            setModalRemove(false);
          } else holdApartment();
          setModalRemove(false);
        }}
      >
        {show === true ? "הקפא מודעה" : "הפעל מודעה"}
      </button>

      {modalHold && (
        <div className="divModel">
          האם אתה בטוח כי ברצונך להקפיא את המודעה?
          <div className="btnsModal">
            <button className="btnModal" onClick={holdApartment}>
              {show === true ? "הקפא מודעה" : "הפעל מודעה"}
            </button>
            <button
              className="btnModal"
              onClick={() => {
                setModalHold(false);
              }}
            >
              ביטול
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default HoldApartment;
