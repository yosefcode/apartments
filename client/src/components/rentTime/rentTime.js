import "./rentTime.css";
import shabat from "../../assets/shabat.svg";
import Holiday from "../../assets/Holiday.svg";
import calander from "../../assets/calander.svg";

function RentTime({ rentTime }) {
  for (let index = 0; index < rentTime.length; index++) {
    const element = rentTime[index];
    if (element === "4") {
      rentTime.splice(0, 4, "4");
    }
  }
  return (
    <div className="RentTime">
      {rentTime.map((time) =>
        time === "4" ? (
          <div>
            <img className="icon_time_rent" src={calander} alt=""></img> כל השנה
          </div>
        ) : time === "1" ? (
          <div>
            <img className="icon_time_rent" src={shabat} alt=""></img> שבתות /
            סופ"ש
          </div>
        ) : time === "2" ? (
          <div>
            <img className="icon_time_rent" src={shabat} alt=""></img> חגים
          </div>
        ) : time === "3" ? (
          <div>
            <img className="icon_time_rent" src={Holiday} alt=""></img> בין
            הזמנים
          </div>
        ) : null
      )}
    </div>
  );
}

export default RentTime;
