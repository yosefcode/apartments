import "./header.css";
import "react-gallery-carousel/dist/index.css";
import { useState } from "react";
import ShowFavorite from "../../favorite/showFavorite/showFavorite";
import { Call } from "@mui/icons-material";

function Info({ apartmentShow }) {
  const [bgcolorHeader, setBgcolorHeader] = useState("header");
  const [showFavorite, setShowFavorite] = useState("noneShowFavorite");
  const [showCall, setShowCall] = useState(false);

  window.onscroll = function () {
    changeClassName();
  };

  const changeClassName = () => {
    if (document.documentElement.scrollTop > 170) {
      setBgcolorHeader("header bgcolorHeader");
      setShowFavorite("yesShowFavorite");
      setShowCall(true);
    } else {
      setBgcolorHeader("header");
      setShowFavorite("noneShowFavorite");
      setShowCall(false);
    }
  };

  return apartmentShow.map((apartment) => (
    <div className={bgcolorHeader}>
      <div className="header1">
        <div className="header_mobile">
          <div className="nameHeader">
            {apartment.nameApartment}.
            <span className="addressHeader">
              {apartment.area}, {apartment.city}.
            </span>
          </div>
        </div>

        {showCall && document.documentElement.clientWidth < 600 ? (
          <div className="phone_icon">
            <Call
              style={{
                fontSize: "2.5rem",
                color: "white",
              }}
              className="phone"
              onClick={() => {
                window.open(`tel:${apartment.phone}`);
              }}
            />
          </div>
        ) : (
          <div className="phoneHeader">{apartment.phone}</div>
        )}
      </div>
      <div className={showFavorite}>
        <ShowFavorite />
      </div>
    </div>
  ));
}

export default Info;
