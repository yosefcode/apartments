import React, { useState, useEffect } from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
// import EditApartment from "../editApartment/editApartment";
import SliderImage from "../sliderImage/sliderImage";

const InfoApartment = ({ item, modalEdit }) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="info-apartment">
      {/* {modalEdit ? (
        <EditApartment item={item} />
      ) : ( */}
      <div>
        <div>
          <div dir="ltr" className="div_img_carousel">
            <SliderImage item={item} />
          </div>

          <div>
            <br />
            <h4>
              {item.rooms} חדרים, עד {item.beds} מיטות.
            </h4>
            <h4>
              החל מ-{item.price} ש"ח ל{item.priceMethod}.
            </h4>
            <h5>{item.long}</h5>
          </div>
        </div>
        <div className="special">
          {item.special.map((special) => (
            <li>
              <CheckBoxIcon
                style={{
                  fontSize: "1.5rem",
                  position: "relative",
                  top: "4px",
                  color: "green",
                }}
              />{" "}
              {special}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};
export default InfoApartment;
