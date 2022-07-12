import "./Description.css";
import { useState, useEffect } from "react";
import { TextArea, Input } from "../../Input_select_button/Input_select_button";

function SpecialApartment({
  setApartment,
  apartment,
  formik,
  itemForEdit,
  onchange,
}) {
  const [special, setSpecial] = useState(
    itemForEdit ? itemForEdit?.special : []
  );
  const [time, setTime] = useState(itemForEdit ? itemForEdit?.times : []);

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
    { time: `שבתות / סופ"ש`, value: "1" },
    { time: "חגים", value: "2" },
    { time: "בין הזמנים", value: "3" },
    { time: `כל השנה`, value: "4" },
  ];
  return (
    <div className="div-all-input">
      <div className="div-all-input div_description">
        <TextArea
          label={"תיאור קצר"}
          onInput={(e) => {
            setApartment({
              ...apartment,
              short: e.currentTarget.textContent,
            });
          }}
          placeholder={"כתבו תיאור קצר על מקום האירוח (עד 100 תווים)"}
          formikErr={formik.errors.short}
          width={"92%"}
          height={"14rem"}
          content={itemForEdit ? itemForEdit.short : ""}
        />

        <TextArea
          label={"תיאור ארוך"}
          onInput={(e) => {
            setApartment({
              ...apartment,
              long: e.currentTarget.textContent,
            });
          }}
          placeholder={"ספרו בהרחבה על מקום האירוח"}
          formikErr={formik.errors.long}
          width={"92%"}
          height={"14rem"}
          content={itemForEdit ? itemForEdit.long : ""}
        />
      </div>
      <TextArea
        label={"המיוחדים שלנו"}
        formikErr={formik.errors.special}
        width={"92%"}
        height={"auto"}
        content={
          <div className="special">
            {specials.map((specials, index) => (
              <div key={index} style={{ marginBottom: "15px" }}>
                <input
                  type="checkbox"
                  value={specials}
                  checked={special
                    ?.map((special) => special)
                    .includes(specials)}
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
        }
      />

      <TextArea
        label={"תקופות השכרה"}
        formikErr={formik.errors.times}
        width={"92%"}
        height={"auto"}
        content={
          <div className="special">
            {times.map((times, index) => (
              <div key={index} style={{ marginBottom: "15px" }}>
                <input
                  type="checkbox"
                  value={times.value}
                  checked={time?.map((time) => time).includes(times.value)}
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
        }
      />
      <Input
        label={"קישור לאתר"}
        name={"webSite"}
        onChange={onchange}
        defaultValue={itemForEdit ? itemForEdit.webSite : ""}
        placeholder={"ניתן לצרף קישור לאתר של האירוח, עמוד פייסבוק וכד'"}
        width={"92%"}
      />
    </div>
  );
}

export default SpecialApartment;
