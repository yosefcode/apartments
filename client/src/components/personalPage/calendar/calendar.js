import "./calendar.css";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const calendar = ({ apartmentShow }) => {
  return (
    //  apartmentShow.map((list) => (
    <div className="calendar">
      {" "}
      <div className="headerCalendar headerCalendar1">תאריכים פנויים</div>
      <div className="aaa">
        <Calendar />
      </div>
    </div>
    // ));
  );
};

export default calendar;
