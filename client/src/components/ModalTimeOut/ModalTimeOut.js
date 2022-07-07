import CancelIcon from "@mui/icons-material/Cancel";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../variable-Context";
import "./ModalTimeOut.css";

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
      <div className="timer">
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
    <div className="modal">
      <div className="timerWrapper">
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
      <div className="modalTimeOut_content">{textMsgModalTimeOut}</div>
    </div>
  );
};
export default ModalTimeOut;
