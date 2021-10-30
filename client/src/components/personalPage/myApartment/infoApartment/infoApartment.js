import React, { useState, useEffect } from "react";
import "./infoApartment.css";
import axios from "axios";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const InfoApartment = ({ list }) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="info-apartment">
      {list.area}, {list.city}.<br />
      {list.rooms} חדרים, עד {list.beds} מיטות.
      <br /> החל מ{list.price} ש"ח ל{list.priceMethod}.<br />
      <br />
      {list.long}
      <br />
      <div className="special">
        {list.special.map((special) => (
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
        ))}
      </div>
      <div className="div-img">
        {list.images.map((img) => (
          <img src={img} alt="" className="img" />
        ))}
      </div>
    </div>
  );
};
export default InfoApartment;
