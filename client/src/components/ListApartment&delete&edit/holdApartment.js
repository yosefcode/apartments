import React, { useState } from "react";
import axios from "axios";
import Modal from "../Modal";

const HoldApartment = ({ id, show, render, setRender }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const holdApartment = () => {
    axios
      .put(
        "/api/holdApartment/" + id,
        show === "1" ? { show: "2" } : { show: "1" }
      )
      .then();
    setRender(!render);
  };

  return (
    <div>
      <button
        className="btn"
        disabled={show === "0" ? true : false}
        onClick={() => {
          if (show === "1") {
            setIsOpenModal(true);
          } else holdApartment();
        }}
      >
        {show === "0"
          ? "ממתין לאישור"
          : show === "1"
          ? "הקפא מודעה"
          : "הפעל מודעה"}
      </button>

      {isOpenModal && (
        <Modal
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          content={
            <div>
              האם אתה בטוח כי ברצונך להקפיא את המודעה?
              <div className="btnsModal">
                <button className="btnModal" onClick={holdApartment}>
                  הקפא מודעה
                </button>
                <button
                  className="btnModal"
                  onClick={() => {
                    setIsOpenModal(false);
                  }}
                >
                  ביטול
                </button>
              </div>
            </div>
          }
        />
      )}
    </div>
  );
};
export default HoldApartment;
