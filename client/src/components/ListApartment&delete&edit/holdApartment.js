import React, { useState, useContext } from "react";
import Modal from "../Modal";
import { PutToServer } from "../getData";
import { AppContext } from "../../variable-Context";

const HoldApartment = ({ id, show, render, setRender }) => {
  const { isManager } = useContext(AppContext);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const holdApartment = () => {
    PutToServer(
      `/api/holdApartment/${id}`,
      show === "1" ? { show: "2" } : { show: "1" }
    );
    setRender(!render);
  };

  return (
    <div>
      <button
        className="btn"
        disabled={isManager ? false : show === "0" ? true : false}
        onClick={() => {
          show === "1" || show === "0" ? setIsOpenModal(true) : holdApartment();
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
              {show === "0"
                ? "מאשר את המודעה?"
                : "האם אתה בטוח שברצונך להקפיא את המודעה?"}
              <div className="btnsModal">
                <button className="btnModal" onClick={holdApartment}>
                  {show === "0" ? "אישור" : "הקפא מודעה"}
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
