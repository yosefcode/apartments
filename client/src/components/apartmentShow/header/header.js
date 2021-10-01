import "./header.css";
import "react-gallery-carousel/dist/index.css";
import { useState } from "react";

function Info({ apartmentShow }) {
  const [bgcolorHeader, setBgcolorHeader] = useState("header");

  window.onscroll = function () {
    changeClassName();
  };

  const changeClassName = () => {
    document.documentElement.scrollTop > 100
      ? setBgcolorHeader("header bgcolorHeader")
      : setBgcolorHeader("header");
  };

  return apartmentShow.map((list) => (
    <div className={bgcolorHeader}>
      <div className="header1">
        <div className="nameHeader">
          {list.area} דירות נופש.
          <span className="addressHeader">
            {list.area}, {list.city}.
          </span>
        </div>

        <div className="phoneHeader">{list.phone}</div>
      </div>
    </div>
  ));
}

export default Info;
