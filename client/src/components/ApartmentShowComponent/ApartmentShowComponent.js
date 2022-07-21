import "./ApartmentShowComponent.css";
import React, { useState, useEffect, useRef } from "react";
import Location from "./location";
import CalendarComponent from "../CalendarComponent/CalendarComponent";
import SliderImage from "../sliderImage";
import Info from "./info";
import Header from "./header/header";
import SendMessage from "./sendMessage/sendMessage";
import BoxHeader from "../Box&Header/Box&Header";

function ApartmentShow({ apartmentShow, sendMessage }) {
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView({ block: "center" });

  return (
    <div className="apartmentShowComponent">
      <Header apartmentShow={apartmentShow} />

      {/* <SliderImage item={apartmentShow} /> */}

      <BoxHeader
        width={"100%"}
        content={<Info apartmentShow={apartmentShow} />}
        label={"מידע"}
      />

      {sendMessage && (
        <BoxHeader
          width={"100%"}
          content={<SendMessage apartmentShow={apartmentShow} />}
          label={"שלח הודעה לבעל הדירה"}
        />
      )}

      <BoxHeader
        width={"100%"}
        content={<CalendarComponent dateBusy={apartmentShow?.dateBusy} />}
        label={"תאריכים פנויים"}
      />

      <BoxHeader
        width={"100%"}
        content={<Location apartmentShow={apartmentShow} />}
        label={"מפת האיזור"}
      />
    </div>
  );
}

export default ApartmentShow;
