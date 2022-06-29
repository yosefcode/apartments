import CancelIcon from "@mui/icons-material/Cancel";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../variable-Context";

const ModalTimeOut = ({
  textMsgModalTimeOut,
  setIsOpenModalTimeOut,
  duration,
}) => {
  const { uidFirebase, setRegisteredUser } = useContext(AppContext);

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      setRegisteredUser(true);
      setIsOpenModalTimeOut(false);
    }

    return (
      <div style={style.timer}>
        <CancelIcon
          style={{ fontSize: 28 }}
          onClick={() => {
            setIsOpenModalTimeOut(false);
          }}
        />
      </div>
    );
  };

  return (
    <div style={style.modal}>
      <div style={style.timerWrapper}>
        <CountdownCircleTimer
          isPlaying
          duration={duration}
          colors={[["#8a8a8a"]]}
          onComplete={() => [true, 1000]}
          size={32}
          strokeWidth={6}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <div style={style.modalTimeOut_content}>{textMsgModalTimeOut}</div>
    </div>
  );
};
export default ModalTimeOut;

const style = {
  modal: {
    width: "calc(100% - 12vw)",
    position: "relative",
    fontSize: "2rem",
    textAlign: "center",
    backgroundColor: "white",
    fontWeight: 700,
    padding: "3vw 6vw",
    marginTop: "12vh",
    lineHeight: "3rem",
    color: "rgb(28, 2, 99)",
  },
  timer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  timerWrapper: {
    position: "absolute",
    top: "-4rem",
    width: "calc(100% - 12vw)",
    cursor: "pointer",
  },

  modalTimeOut_content: {
    textAlign: "center",
  },
};
