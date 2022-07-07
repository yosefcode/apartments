import React, { useState } from "react";
import Modal from "../Modal";
import { DeleteToServer } from "../getData";
import { Button } from "../Input_select_button/Input_select_button";

const RmoveApartment = ({ idForApartment, render, setRender }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const rmoveApartment = () => {
    DeleteToServer(`/api/deleteApartment/${idForApartment}`);
    setRender(!render);
  };

  return (
    <div style={{ margin: "0 auto" }}>
      <Button
        title={"מחק מודעה"}
        onClick={() => {
          setIsOpenModal(true);
        }}
        padding={"0.5rem 5.5rem"}
        borderRadius={"10px"}
      />

      {isOpenModal && (
        <Modal
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          content={
            <div>
              האם אתה בטוח כי ברצונך למחוק את המודעה?{" "}
              <div className="btnsModal">
                <Button
                  title={"מחק מודעה"}
                  onClick={rmoveApartment}
                  padding={"0.3rem 1rem"}
                  borderRadius={"10px"}
                />
                <Button
                  title={"ביטול"}
                  onClick={() => {
                    setIsOpenModal(false);
                  }}
                  padding={"0.3rem 1rem"}
                  borderRadius={"10px"}
                />
              </div>
            </div>
          }
        />
      )}
    </div>
  );
};
export default RmoveApartment;
