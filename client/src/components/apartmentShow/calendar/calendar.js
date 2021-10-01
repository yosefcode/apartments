import "./calendar.css";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const calendar = ({ apartmentShow }) => {
  return (
    <div className="calendar">
      <Calendar
        // calendarType="Hebrew"
        // tileClassName="aaaa"
        showNeighboringMonth={false}
      />
    </div>
  );
};

export default calendar;
