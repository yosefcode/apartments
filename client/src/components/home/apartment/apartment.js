import "./apartment.css";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AppContext } from "../../../variable-Context";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import FavoriteIcon from "./favoriteIcon/addFavorite";

function Apartment() {
  let [list, setList] = useState([]);
  const { filter, setListIDForFavorite } = useContext(AppContext);

  useEffect(() => {
    axios.post(`/api/list/filter/`, filter).then((res) => {
      const getFilter = () => {
        setList(res.data);
      };
      res.data < 1 ? getData() : getFilter();
    });
  }, [filter]);

  const getData = () => {
    axios.get("/api/list/").then((res) => {
      setList(res.data);
    });
  };

  return (
    <div className="allApartments">
      <div>
        {" "}
        {list.map((list) => (
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
              <FavoriteIcon apartmentForFavorite={list} />
            </div>
            <Link className="link" to={"/" + list._id} target="_blank">
              {/* <div>
                  <img className="imgaa" src={list.firstImage} alt=""></img>
                </div> */}
              <div>
                <div className="nameApartment">נופש חלומי ב{list.city}</div>
                <div className="location">
                  {list.city}, {list.area}.
                </div>
                <div className="beds"> עד {list.beds} מיטות</div>
                <div className="phone">{list.phone}</div>
                <div className="price">החל מ- {list.price} ש"ח ללילה</div>
              </div>
            </Link>
          </div>
        ))}{" "}
      </div>
    </div>
  );
}

export default Apartment;
