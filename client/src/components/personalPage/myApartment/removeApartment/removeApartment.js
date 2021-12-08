import React, { useState, useEffect } from "react";
import "./removeApartment.css";
import axios from "axios";

const RmoveApartment = ({
  id,
  setStatus,
  status,
  modalRemove,
  setModalHold,
  setModalRemove,
}) => {
  const rmoveApartment = () => {
    axios.delete("/api/deleteApartment/" + id).then();
    setModalRemove(false);
    setStatus(status === true ? false : true);
  };

  return (
    <div className="removeApartment">
      <button
        className="btn"
        onClick={() => {
          setModalRemove(true);
          setModalHold(false);
        }}
      >
        מחק מודעה
      </button>

      {modalRemove && (
        <div className="divModel">
          האם אתה בטוח כי ברצונך למחוק את המודעה?{" "}
          <div className="btnsModal">
            <button className="btnModal" onClick={rmoveApartment}>
              מחק מודעה
            </button>
            <button
              className="btnModal"
              onClick={() => {
                setModalRemove(false);
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
export default RmoveApartment;
