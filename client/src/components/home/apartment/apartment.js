import "./apartment.css";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AppContext } from "../../../variable-Context";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import FavoriteIcon from "../../favorite/addToFavorite/addToFavorite";

function Apartment() {
  let [list, setList] = useState([]);
  let [errorFilter, setErrorfilter] = useState(false);
  const { filter, setListIDForFavorite } = useContext(AppContext);

  // const set = { area: ["ירושלים"], city: [], rooms: [5] };

  // for (let i = set.length - 1; i > 0; i++) {
  //   console.log(Object.keys(i));
  // }

  // const check = JSON.parse(JSON.stringify(set), (key, value) =>
  //   value === null || value === [] ? undefined : value
  // );

  // console.log(check);
  // // console.log(set);
  // var newArray = Object.keys(set).forEach(
  //   (k) => !set[k] && set[k] !== undefined && delete set[k]
  // );

  // // .forEach(
  // //   (k) => set[k] == null && delete set[k]
  // // );
  // // set.length > 0
  // //   ?
  // // set.filter(Boolean);
  // // : "";
  // console.log(list);
  useEffect(() => {
    axios.post(`/api/list/filter/`, filter).then((res) => {
      const getFilter = () => {
        setList(res.data);
        // setErrorfilter(false);
      };
      res.data < 1 ? getData() : getFilter();
    });
    // console.log(filter);
  }, [filter]);

  const getData = () => {
    axios.get("/api/list/").then((res) => {
      setList(res.data);
      // setErrorfilter(true);
    });
  };

  // function shuffleArray(array) {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  // }

  // var arr = list;
  // shuffleArray(arr);
  // console.log(arr);

  return (
    <div className="allApartments">
      <div>
        {/* {errorFilter && (
          <p>לא נמצאו דירות מתאימות לחיפוש שביצעת. שנה את טווח החיפוש</p>
        )} */}
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
                <div className="nameApartment">{list.nameApartment}</div>
                <div className="location">
                  {list.city}, {list.area}.
                </div>
                <div className="beds"> עד {list.beds} מיטות</div>
                <div className="phone">
                  {list.name} - {list.phone}
                </div>
                <div className="price">
                  החל מ- {list.price} ש"ח ל{list.priceMethod}
                </div>
              </div>
            </Link>
          </div>
        ))}{" "}
      </div>
    </div>
  );
}

export default Apartment;
