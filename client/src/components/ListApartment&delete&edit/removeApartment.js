import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../Modal";

const RmoveApartment = ({ id, render, setRender }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const rmoveApartment = () => {
    axios.delete("/api/deleteApartment/" + id).then();
    setRender(!render);
  };

  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          setIsOpenModal(true);
        }}
      >
        מחק מודעה
      </button>

      {isOpenModal && (
        <Modal
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          content={
            <div>
              האם אתה בטוח כי ברצונך למחוק את המודעה?{" "}
              <div className="btnsModal">
                <button className="btnModal" onClick={rmoveApartment}>
                  מחק מודעה
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
export default RmoveApartment;
