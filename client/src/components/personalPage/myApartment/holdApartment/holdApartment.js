import React, { useState } from "react";
import "./holdApartment.css";
import axios from "axios";

const HoldApartment = ({ id, show, setStatus, status }) => {
  const [modal, setModal] = useState(false);

  const holdApartment = () => {
    axios.put("/api/holdApartment/" + id, { show: show }).then();
    setModal(false);
    setStatus(status === true ? false : true);
  };
  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          show === true ? setModal(true) : holdApartment();
        }}
      >
        {show === true ? "הקפא מודעה" : "הפעל מודעה"}
      </button>

      {modal && (
        <div className="divModel">
          האם אתה בטוח כי ברצונך להקפיא את המודעה?
          <button className="btnModal" onClick={holdApartment}>
            {show === true ? "הקפא מודעה" : "הפעל מודעה"}
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
export default HoldApartment;
