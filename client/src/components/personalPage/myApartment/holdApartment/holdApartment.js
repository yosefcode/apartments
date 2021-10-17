import React, { useState, useEffect } from "react";
import "./holdApartment.css";
import axios from "axios";

const HoldApartment = ({ id, show }) => {
  const [modal, setModal] = useState(false);

  const holdApartment = () => {
    axios.put("/api/holdApartment/" + id, { show: show }).then();
    setModal(false);
  };
  console.log(show);
  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          setModal(true);
        }}
      >
        הקפא מודעה
      </button>

      {modal && (
        <div className="divModel">
          האם אתה בטוח כי ברצונך להקפיא את המודעה?
          <button className="btnModal" onClick={holdApartment}>
            הקפא מודעה
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
