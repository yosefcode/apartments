import React, { useState, useEffect } from "react";
import "./removeApartment.css";
import axios from "axios";

const RmoveApartment = ({ id, setStatus, status }) => {
  const [modal, setModal] = useState(false);

  const rmoveApartment = () => {
    axios.delete("/api/deleteApartment/" + id).then();
    setModal(false);
    setStatus(status === true ? false : true);
  };

  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          setModal(true);
        }}
      >
        מחק מודעה
      </button>

      {modal && (
        <div className="divModel">
          האם אתה בטוח כי ברצונך למחוק את המודעה?
          <button className="btnModal" onClick={rmoveApartment}>
            מחק מודעה
          </button>
          <button
            className="btnModal"
            onClick={() => {
              setModal(false);
            }}
          >
            ביטול
          </button>
        </div>
      )}
    </div>
  );
};
export default RmoveApartment;
