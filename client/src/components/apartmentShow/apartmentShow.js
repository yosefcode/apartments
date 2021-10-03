import "./apartmentShow.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Location from "./location/location";
import Calendar from "./calendar/calendar";
import SliderImage from "./sliderImage/sliderImage";
import Info from "./info/info";
import Contact from "./contact/contact";
import Header from "./header/header";
import MoreApartment from "./moreApartment/moreApartment";
import FilterArea from "../filterArea/filterArea";

function ApartmentShow() {
  const { id } = useParams();

  const [apartmentShow, setApartmentShow] = useState([]);

  useEffect(() => {
    axios.post("/api/list/" + id).then((res) => {
      setApartmentShow(res.data);
    });
  }, [id]);

  return (
    <div className="apartmentShow">
      <div className="filterArea">
        <FilterArea />
      </div>

      <div className="divHeader">
        <Header apartmentShow={apartmentShow} />
        <Contact apartmentShow={apartmentShow} />
      </div>

      <div className="divCarousel">
        <SliderImage apartmentShow={apartmentShow} />
      </div>

      <div className="divInfo">
        <Info apartmentShow={apartmentShow} />
      </div>

      <div className="divMap">
        <Location apartmentShow={apartmentShow} />
        {/* <Calendar /> */}
      </div>

      <div className="divMoreApartment">
        <MoreApartment apartmentShow={apartmentShow} />
      </div>
    </div>
  );
}

export default ApartmentShow;
