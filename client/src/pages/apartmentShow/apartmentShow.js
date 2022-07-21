import "./apartmentShow.css";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Location from "./location/location";
import CalendarComponent from "../../components/CalendarComponent/CalendarComponent";
import BoxHeader from "../../components/Box&Header/Box&Header";
import SliderImage from "./sliderImage/sliderImage";
import Info from "./info/info";
import Contact from "./contact/contact";
import Header from "./header/header";
import MoreApartment from "./moreApartment/moreApartment";
import FilterArea from "../filterArea/filterArea";
import SendMessage from "./sendMessage/sendMessage";
import ApartmentShowComponent from "../../components/ApartmentShowComponent/ApartmentShowComponent";

function ApartmentShow() {
  const { id } = useParams();

  const [apartmentShow, setApartmentShow] = useState([]);

  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView({ block: "center" });

  useEffect(() => {
    axios.post("/api/apartmentShow/" + id).then((res) => {
      setApartmentShow(res.data);
      // setApartmentShow(res.data[0]);
    });
  }, [id]);
  console.log(apartmentShow);

  return (
    <div>
      {/* <ApartmentShowComponent apartmentShow={apartmentShow[0]} /> */}
      <div className="filterArea">
        <FilterArea />
      </div>
      <div className="apartmentShow">
        <div className="divHeader">
          <Header apartmentShow={apartmentShow} />
          <Contact
            apartmentShow={apartmentShow}
            executeScroll={executeScroll}
          />
        </div>
        <div className="container_apartmentShow">
          <div className="divCarousel">
            <SliderImage apartmentShow={apartmentShow} />
          </div>

          <div className="divCommponent">
            <Info apartmentShow={apartmentShow} />
          </div>

          <div ref={myRef} className="divCommponent">
            <div className="divCommponent-SendMessage-Calendar">
              <SendMessage apartmentShow={apartmentShow} />
              <BoxHeader
                width={"100%"}
                content={
                  <CalendarComponent dateBusy={apartmentShow[0]?.dateBusy} />
                }
                label={"תאריכים פנויים"}
              />
            </div>
          </div>

          <div className="divCommponent">
            <Location apartmentShow={apartmentShow} />
          </div>

          <div className="divCommponent">
            <MoreApartment apartmentShow={apartmentShow} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApartmentShow;
