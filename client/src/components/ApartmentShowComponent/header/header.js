import "./header.css";
import { useState } from "react";
import { Call } from "@mui/icons-material";

function Info({ apartmentShow }) {
  const [bgcolorHeader, setBgcolorHeader] = useState("header");
  const [showFavorite, setShowFavorite] = useState("noneShowFavorite");
  const [showCall, setShowCall] = useState(false);

  // window.onscroll = function () {
  //   changeClassName();
  // };

  // const changeClassName = () => {
  //   if (document.documentElement.scrollTop > 170) {
  //     setBgcolorHeader("header bgcolorHeader");
  //     setShowFavorite("yesShowFavorite");
  //     setShowCall(true);
  //   } else {
  //     setBgcolorHeader("header");
  //     setShowFavorite("noneShowFavorite");
  //     setShowCall(false);
  //   }
  // };

  return (
    <div className={bgcolorHeader}>
      <div className="header_mobile">
        <div className="nameHeader">
          {apartmentShow.nameApartment}
          <span className="addressHeader">
            {apartmentShow.area}, {apartmentShow.city}.
          </span>
        </div>
      </div>

      {/* {document.documentElement.clientWidth < 600 ? ( */}
      {/* ) : ( */}
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
      {/* )} */}
    </div>
  );
}

export default Info;
