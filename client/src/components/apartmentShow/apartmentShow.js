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
import SendMessage from "./sendMessage/sendMessage";

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

      <div className="divCommponent">
        <Info apartmentShow={apartmentShow} />
      </div>
      <div className="divCommponent">
        <div className="divCommponent-SendMessage-Calendar">
          <SendMessage apartmentShow={apartmentShow} />
          <Calendar apartmentShow={apartmentShow} />
        </div>
      </div>

      <div className="divCommponent">
        <Location apartmentShow={apartmentShow} />
      </div>

      <div className="divCommponent">
        <MoreApartment apartmentShow={apartmentShow} />
      </div>
    </div>
  );
}

export default ApartmentShow;
