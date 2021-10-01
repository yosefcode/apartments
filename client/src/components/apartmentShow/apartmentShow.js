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

function ApartmentShow({ setFilter, filter }) {
  const { id } = useParams();

  const [apartmentShow, setApartmentShow] = useState([]);

  useEffect(() => {
    axios.post("/api/list/" + id).then((res) => {
      setApartmentShow(res.data);
    });
  }, [id]);

  return (
    <div className="apartmentShow">
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
        <MoreApartment
          apartmentShow={apartmentShow}
          setFilter={setFilter}
          filter={filter}
        />
      </div>
    </div>
  );
}

export default ApartmentShow;
