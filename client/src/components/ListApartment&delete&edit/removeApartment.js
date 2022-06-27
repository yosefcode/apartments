import React, { useState } from "react";
import Modal from "../Modal";
import { DeleteToServer } from "../getData";

const RmoveApartment = ({ idForApartment, render, setRender }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const rmoveApartment = () => {
    DeleteToServer(`/api/deleteApartment/${idForApartment}`);
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
