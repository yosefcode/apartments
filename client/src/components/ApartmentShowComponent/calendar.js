import React, { useState, useEffect } from "react";
import CalendarComponent from "../CalendarComponent/CalendarComponent";
import { differenceInCalendarDays } from "date-fns";

const Calendar = ({ apartmentShow }) => {
  // const [dateBusy, setDateBusy] = useState([]);
  console.log(apartmentShow);

  // function isSameDay(a, b) {
  //   return differenceInCalendarDays(a, b) === 0;
  // }

  // function onChange(nextValue) {
  //   let test = dateBusy?.find((dDate) => isSameDay(dDate, nextValue));
  //   if (!test) {
  //     setDateBusy((value) => [...value, nextValue]);
  //   } else {
  //     let filter = dateBusy.filter((e) => e !== test);
  //     setDateBusy(filter);
  //   }
  // }

  return <CalendarComponent dateBusy={apartmentShow?.dateBusy} />;
};

export default Calendar;
