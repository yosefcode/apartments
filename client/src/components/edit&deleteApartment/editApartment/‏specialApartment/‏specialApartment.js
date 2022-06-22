import "./‏specialApartment.css";
import axios from "axios";
import { useState, useEffect } from "react";

function SpecialApartment({ list, setNewApartment, newApartment, onchange }) {
  const [special, setSpecial] = useState([]);

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
    "מקום לברביקיו",
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

  return (
    <div className="div-all-input">
      <div className="div-textarea-Details" id="short">
        <label className="labelInput">תיאור קצר</label>
        <div
          onInput={(e) => {
            setNewApartment({
              ...newApartment,
              short: e.currentTarget.textContent,
            });
          }}
          className="textarea"
          contentEditable
          placeholder="כתבו תיאור קצר על מקום האירוח (עד 100 תווים)"
        >
          {list.short}
        </div>
      </div>

      <div className="div-textarea-Details" id="long">
        <label className="labelInput">תיאור ארוך</label>
        <div
          onInput={(e) => {
            setNewApartment({
              ...newApartment,
              long: e.currentTarget.textContent,
            });
          }}
          className="textarea"
          contentEditable
          placeholder="ספרו בהרחבה על מקום האירוח"
        >
          {list.long}
        </div>
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
                    setNewApartment({
                      ...newApartment,
                      special: special,
                    });
                  } else {
                    let filter = special.filter(
                      (e) => e !== event.target.value
                    );
                    setSpecial(filter);
                    setNewApartment({
                      ...newApartment,
                      special: filter,
                    });
                  }
                }}
              />
              <label for="vehicle1">{specials}</label>
              {/* {list.special.map((special) => (
              <li>
                <CheckBoxIcon
                  style={{
                    fontSize: "1.2vw",
                    position: "relative",
                    top: "0.4vw",
                    color: "green",
                  }}
                />{" "}
                {special}
              </li>
            ))} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SpecialApartment;
