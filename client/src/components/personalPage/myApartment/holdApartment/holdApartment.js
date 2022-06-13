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
    axios
      .put(
        "/api/holdApartment/" + id,
        show === "1" ? { show: "2" } : { show: "1" }
      )
      .then();
    setModalHold(false);
    // setStatus(status === "1" ? "2" : "1");
  };

  return (
    <div className="holdApartment">
      <button
        className="btn"
        disabled={show === "0" ? true : false}
        onClick={() => {
          if (show === "1") {
            setModalHold(true);
            setModalRemove(false);
          } else holdApartment();
          setModalRemove(false);
        }}
      >
        {show === "0"
          ? "ממתין לאישור"
          : show === "1"
          ? "הקפא מודעה"
          : "הפעל מודעה"}
      </button>

      {modalHold && (
        <div
          className="model"
          onClick={() => {
            setModalHold(false);
          }}
        >
          <div
            className="divModel"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            האם אתה בטוח כי ברצונך להקפיא את המודעה?
            <div className="btnsModal">
              <button className="btnModal" onClick={holdApartment}>
                הקפא מודעה
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
        </div>
      )}
    </div>
  );
};
export default HoldApartment;
