import React, { useState, useContext } from "react";
import Modal from "../Modal";
import { PutToServer } from "../getData";
import { AppContext } from "../../variable-Context";
import { Button } from "../Input_select_button/Input_select_button";

const HoldApartment = ({
  idForApartment,
  show,
  render,
  setRender,
  setIsOpenModal,
  setContentModal,
}) => {
  const { isManager } = useContext(AppContext);
  let mql = window.matchMedia("(max-width: 600px)");

  const holdApartment = () => {
    PutToServer(
      `/api/holdApartment/${idForApartment}`,
      show === "1" ? { show: "2" } : { show: "1" }
    );
    setIsOpenModal(false);
    setRender(!render);
  };

  const OpenModal = () => {
    setIsOpenModal(true);
    setContentModal(
      <div>
        {show === "0"
          ? "מאשר את המודעה?"
          : "האם אתה בטוח שברצונך להקפיא את המודעה?"}
        <div className="btnsModal">
          <Button
            title={show === "0" ? "אישור" : "הקפא מודעה"}
            onClick={holdApartment}
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
    );
  };

  return (
    <div style={{ margin: "0 auto" }}>
      <Button
        title={
          show === "0"
            ? "ממתין לאישור"
            : show === "1"
            ? "הקפא מודעה"
            : "הפעל מודעה"
        }
        disabled={isManager ? false : show === "0" ? true : false}
        onClick={() => {
          show === "1" || show === "0" ? OpenModal() : holdApartment();
        }}
        padding={mql.matches ? "0.5rem" : "0.5rem 5.5rem"}
        borderRadius={"10px"}
      />
    </div>
  );
};
export default HoldApartment;
