import "./apartment-myFavorite-page.css";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import AddToFavorite from "../../addToFavorite/addToFavorite";
import { FavoriteBorder, Favorite } from "@mui/icons-material/";

function Apartment() {
  var listFavoriteLocalStorage =
    JSON.parse(localStorage.getItem(`favorite`)) || [];

  return (
    <div className="allApartments">
      <div>
        {" "}
        {listFavoriteLocalStorage.length < 1 ? (
          <div className="infoError">
            אין לך עדיין מועדפים &#128542;
            <br />
            <br /> ניתן להוסיף ע"י לחיצה על{" "}
            <FavoriteBorder className="iconError" /> הנמצא בכל מודעה.
            <br />
            <br /> כך תוכלו למצוא תמיד את המודעות שאהבתם.
          </div>
        ) : (
          listFavoriteLocalStorage.map((list) => (
            <div className="boxApartmentHome" key={list._id}>
              <div dir="ltr" className="carouselApartment">
                <Carousel
                  isLoop={true}
                  isAutoPlaying={false}
                  // autoPlayInterval={5000}
                  transitionDurationMin={1000}
                  // hasIndexBoard={false}
                  hasMediaButton={false}
                  hasSizeButton={false}
                  hasThumbnails={false}
                  images={list.images.map((image) => ({ src: image }))}
                />
              </div>
              <div className="divFavoriteIcon">
                <AddToFavorite apartmentForFavorite={list} />
              </div>
              <Link className="link" to={"/" + list._id} target="_blank">
                {/* <div>
                  <img className="imgaa" src={list.firstImage} alt=""></img>
                </div> */}
                <div>
                  <div className="nameApartment">{list.nameApartment}</div>
                  <div className="location">
                    {list.city}, {list.area}.
                  </div>
                  <div className="beds"> עד {list.beds} מיטות</div>
                  <div className="phone">{list.phone}</div>
                  <div className="price">
                    החל מ- {list.price} ש"ח ל{list.priceMethod}
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}{" "}
      </div>
    </div>
  );
}

export default Apartment;
