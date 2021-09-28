import "./apartmentShow.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Location from "./location/location";
import SliderApartment from "./sliderApartment/sliderApartment";
import Calendar from "./calendar/calendar";
import SliderImage from "./sliderImage/sliderImage";
import Info from "./info/info";

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
      <div className="divCarouselInfo">
        <SliderImage apartmentShow={apartmentShow} />
        <Info apartmentShow={apartmentShow} />
      </div>

      <div className="divcClendarMap">
        <Location apartmentShow={apartmentShow} />
        <Calendar />
      </div>

      <div>
        <SliderApartment />
      </div>
    </div>
  );
}

export default ApartmentShow;
