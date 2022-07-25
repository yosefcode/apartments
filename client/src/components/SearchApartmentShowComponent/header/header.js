import "./header.css";
import { Call } from "@mui/icons-material";

function Info({ apartmentShow }) {
  return (
    <div className="header header_mobile">
      {/* <div className="header_mobile"> */}

      <div className="nameHeader">
        {apartmentShow.model === "1"
          ? "השכרה"
          : apartmentShow.model === "2"
          ? "החלפה"
          : "השכרה / החלפה"}
        ,<span className="addressHeader">ב{apartmentShow.area}.</span>
        {/* </div> */}
      </div>

      <div
        className="phoneHeader"
        onClick={() => {
          window.open(`tel:${apartmentShow.phone}`);
        }}
      >
        {apartmentShow.phone}
        <Call
          style={{
            fontSize: "2.5rem",
            color: "green",
            marginInlineStart: "10px",
          }}
        />
      </div>
    </div>
  );
}

export default Info;
