import "./header.css";
import "react-gallery-carousel/dist/index.css";
import { useState } from "react";
import ShowFavorite from "../../favorite/showFavorite/showFavorite";

function Info({ apartmentShow }) {
  const [bgcolorHeader, setBgcolorHeader] = useState("header");
  const [showFavorite, setShowFavorite] = useState("noneShowFavorite");

  window.onscroll = function () {
    changeClassName();
  };

  const changeClassName = () => {
    if (document.documentElement.scrollTop > 100) {
      setBgcolorHeader("header bgcolorHeader");
      setShowFavorite("");
    } else {
      setBgcolorHeader("header");
      setShowFavorite("noneShowFavorite");
    }
  };

  return apartmentShow.map((list) => (
    <div className={bgcolorHeader}>
      <div className="header1">
        <div className="nameHeader">
          {list.name}.
          <span className="addressHeader">
            {list.area}, {list.city}.
          </span>
        </div>

        <div className="phoneHeader">{list.phone}</div>
      </div>
      <div className={showFavorite}>
        <ShowFavorite />
      </div>
    </div>
  ));
}

export default Info;
