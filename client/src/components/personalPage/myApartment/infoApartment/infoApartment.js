import React, { useState, useEffect } from "react";
import "./infoApartment.css";
import axios from "axios";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import EditApartment from "../editApartment/editApartment";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

const InfoApartment = ({ list, modalEdit }) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="info-apartment">
      {modalEdit ? (
        <EditApartment list={list} />
      ) : (
        <div>
          <div>
            <div dir="ltr" className="div_img_carousel">
              {/* {apartmentShow.map((list) => ( */}
              <Carousel
                isLoop={true}
                isAutoPlaying={false}
                autoPlayInterval={10000}
                transitionDurationMin={1000}
                hasMediaButton={false}
                hasSizeButton="bottomRight"
                images={list.images.map((image) => ({ src: image }))}
                // style={{ height: 500, width: 800, margin: 50 }}
              />
            </div>
            <h3>
              {list.rooms} חדרים, עד {list.beds} מיטות.
              <br /> החל מ{list.price} ש"ח ל{list.priceMethod}.<br />
            </h3>
            <br />
            {list.long}
          </div>
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
        </div>
      )}
    </div>
  );
};
export default InfoApartment;
