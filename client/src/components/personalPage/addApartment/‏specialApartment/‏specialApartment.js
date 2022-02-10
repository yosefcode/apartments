import "./‏specialApartment.css";
import axios from "axios";
import { useState, useEffect } from "react";

function SpecialApartment({ id, setApartment, apartment, onchange }) {
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
            setApartment({
              ...apartment,
              short: e.currentTarget.textContent,
            });
          }}
          className="textarea"
          contentEditable
          placeholder="כתבו תיאור קצר על מקום האירוח (עד 100 תווים)"
        />
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
              <label for="vehicle1">{specials}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SpecialApartment;
