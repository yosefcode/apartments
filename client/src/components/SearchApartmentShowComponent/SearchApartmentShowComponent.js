import "./SearchApartmentShowComponent.css";
import React, { useState, useEffect, useRef } from "react";
import CalendarComponent from "../CalendarComponent/CalendarComponent";
import Info from "./info";
import Header from "./header/header";
import SendMessage from "./sendMessage/sendMessage";
import BoxHeader from "../Box&Header/Box&Header";

function SearchApartmentShow({ apartmentShow, sendMessage }) {
  const myRef = useRef(null);
  console.log(apartmentShow);

  const executeScroll = () => myRef.current.scrollIntoView({ block: "center" });

  return (
    <div className="SearchApartmentShow">
      <Header apartmentShow={apartmentShow} />

      <Info apartmentShow={apartmentShow} />

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
        label={"תאריכים מבוקשים"}
      />
    </div>
  );
}

export default SearchApartmentShow;
