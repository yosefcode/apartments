import "./‏specialApartment.css";
import axios from "axios";
import { useState, useEffect } from "react";
// import { Field, Form, Formik, FormikProps } from "formik";

function SpecialApartment({ setApartment, apartment, formik }) {
  const [special, setSpecial] = useState([]);
  const [time, setTime] = useState([]);

  const specials = [
    "פינות ישיבה בחצר",
    "מזגן",
    "ג'קוזי",
    "מטבחון",
    "מכונת אספרסו",
    "מינימרקט",
    "בריכה פרטית",
    "ארוחת בוקר",
    "מגבות",
    "ערסל",
    "נוף",
    "חצר",
    "מתחם לברביקיו",
    "אינטרנט אלחוטי",
    "פינת קפה ותה",
    "קומקום חשמלי",
    "מקרר",
    "מיקרוגל",
    "כיריים חשמליות",
    "נדנדה",
    "מנגל",
    "חנייה פרטית",
    "ריהוט גן",
    "פלטת שבת",
    "מיחם לשבת",
    "בית כנסת קרוב",
  ];

  const times = [
    { time: `שבתות / סופ"ש`, value: 1 },
    { time: "חגים", value: 2 },
    { time: "בין הזמנים", value: 3 },
    { time: `כל השנה`, value: 4 },
  ];
  return (
    <div className="div-all-input">
      <div className="div-textarea-Details" id="short">
        <label className="labelInput">תיאור קצר</label>
        <div
          onInput={(e) => {
            setApartment({
              ...apartment,
              short: e.currentTarget.textContent,
            });
          }}
          className="textarea"
          contentEditable
          placeholder="כתבו תיאור קצר על מקום האירוח (עד 100 תווים)"
        />
        <div className="div_err_addApartment">{formik.errors.short}</div>
      </div>

      <div className="div-textarea-Details" id="long">
        <label className="labelInput">תיאור ארוך</label>
        <div
          onInput={(e) => {
            setApartment({
              ...apartment,
              long: e.currentTarget.textContent,
            });
          }}
          className="textarea"
          contentEditable
          placeholder="ספרו בהרחבה על מקום האירוח"
        />
        <div className="div_err_addApartment">{formik.errors.long}</div>
      </div>

      <div className="div-textarea-Details" id="special">
        <label className="labelInput">המיוחדים שלנו</label>
        <div className="special">
          {specials.map((specials, index) => (
            <div key={index} style={{ marginBottom: "15px" }}>
              <input
                type="checkbox"
                value={specials}
                onChange={(event) => {
                  let test = special.find((e) => e === event.target.value);
                  if (!test) {
                    special.push(event.target.value);
                    setApartment({
                      ...apartment,
                      special: special,
                    });
                  } else {
                    let filter = special.filter(
                      (e) => e !== event.target.value
                    );
                    setSpecial(filter);
                    setApartment({
                      ...apartment,
                      special: filter,
                    });
                  }
                }}
              />
              <label>{specials}</label>
            </div>
          ))}
        </div>
        <div className="div_err_addApartment">{formik.errors.special}</div>
      </div>

      <div className="div-textarea-Details" id="special">
        <label className="labelInput">תקופות השכרה</label>
        <div className="special">
          {times.map((times, index) => (
            <div key={index} style={{ marginBottom: "15px" }}>
              <input
                type="checkbox"
                value={times.value}
                onChange={(event) => {
                  let test = time.find((e) => e === event.target.value);
                  if (!test) {
                    time.push(event.target.value);
                    setApartment({
                      ...apartment,
                      times: time,
                    });
                  } else {
                    let filter = time.filter((e) => e !== event.target.value);
                    setTime(filter);
                    setApartment({
                      ...apartment,
                      times: filter,
                    });
                  }
                }}
              />
              <label>{times.time}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="div_err_addApartment">{formik.errors.times}</div>
    </div>
  );
}

export default SpecialApartment;
