import "./rentTime.css";
import shabat from "./shabat.png";
import Holiday from "./Holiday.png";
import calander from "./calander.png";

function RentTime({ rentTime }) {
  return (
    <div className="RentTime">
      {rentTime.map((time) =>
        time === "4" ? (
          <div>
            <img className="icon_time_rent" src={calander} alt=""></img> כל השנה
          </div>
        ) : time !== "4" && time === "1" ? (
          <div>
            <img className="icon_time_rent" src={shabat} alt=""></img> שבתות /
            סופ"ש
          </div>
        ) : time !== "4" && time === "2" ? (
          <div>
            <img className="icon_time_rent" src={shabat} alt=""></img> חגים
          </div>
        ) : time !== "4" && time === "3" ? (
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
