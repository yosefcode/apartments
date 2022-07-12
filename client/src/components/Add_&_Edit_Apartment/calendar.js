import React, { useState, useEffect } from "react";
import CalendarComponent from "../CalendarComponent/CalendarComponent";
import { differenceInCalendarDays } from "date-fns";
import { TextArea } from "../Input_select_button/Input_select_button";

const Calendar = ({ setApartment, apartment, itemForEdit }) => {
  const [dateBusy, setDateBusy] = useState(
    itemForEdit ? itemForEdit.dateBusy : []
  );

  useEffect(() => {
    setApartment({
      ...apartment,
      dateBusy: dateBusy,
    });
  }, [dateBusy]);

  function isSameDay(a, b) {
    return differenceInCalendarDays(a, b) === 0;
  }

  function onChange(nextValue) {
    let test = dateBusy?.find((dDate) => isSameDay(dDate, nextValue));
    if (!test) {
      setDateBusy((value) => [...value, nextValue]);
    } else {
      let filter = dateBusy.filter((e) => e !== test);
      setDateBusy(filter);
    }
  }

  return (
    <TextArea
      label={"סימון תאריכים תפוסים"}
      width={"92%"}
      height={"auto"}
      content={<CalendarComponent onChange={onChange} dateBusy={dateBusy} />}
    />
  );
};

export default Calendar;
