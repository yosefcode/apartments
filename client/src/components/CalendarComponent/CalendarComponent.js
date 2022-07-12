import React, { useState, useEffect } from "react";
import "./CalendarComponent.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { differenceInCalendarDays } from "date-fns";
import Hebcal from "hebcal";
import gematriya from "gematriya";

const CalendarComponent = ({ dateBusy, onChange }) => {
  useEffect(() => {
    for (let i = 0; i < dateBusy.length; i++) {
      dateBusy[i] = new Date(dateBusy[i]);
    }
  }, [dateBusy]);

  const DateTile = ({ date, view }) => {
    const hebDate = Hebcal.HDate(date);
    return (
      view === "month" && (
        <div className="dateTile">
          <div className="date_cal">{date.getDate()}</div>
          <div className="date_heb">
            {" "}
            {gematriya(hebDate.getDate())}
            <br />
            <div style={{ fontSize: "1.1rem" }}>
              {date.getDay() === 6 ? (
                <span style={{ color: "red" }}> {hebDate.getSedra("h")}</span>
              ) : (
                hebDate.getMonthName("h")
              )}
            </div>
          </div>
        </div>
      )
    );
  };

  function isSameDay(a, b) {
    return differenceInCalendarDays(a, b) === 0;
  }

  function tileClassName({ date, view }) {
    if (view === "month") {
      if (dateBusy?.find((dDate) => isSameDay(dDate, date))) {
        return "busy";
      }
    }
  }

  return (
    <div className="calendar">
      <div>
        <div className="calendar_title">
          <div className="busy_title">תפוס</div>
          <div className="dateTile" style={{ width: "5rem", height: "3rem" }}>
            פנוי
          </div>
        </div>
      </div>
      <Calendar
        tileContent={DateTile}
        onChange={onChange}
        tileClassName={tileClassName}
        calendarType="Hebrew"
        prev2Label={null}
        next2Label={null}
      />
    </div>
  );
};

export default CalendarComponent;
