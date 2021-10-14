import "./personalPage.css";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Calendar from "./calendar/calendar";
import Info from "./info/info";
import SendMessage from "./sendMessage/sendMessage";

function ApartmentShow() {
  const { id } = useParams();

  const [apartmentShow, setApartmentShow] = useState([]);

  useEffect(() => {
    axios.post("/api/list/" + id).then((res) => {
      setApartmentShow(res.data);
      console.log(res.data);
    });
  }, [id]);

  return (
    <div className="apartmentShow">
      {id}
      <div className="divCommponent">
        <Info apartmentShow={apartmentShow} />
      </div>

      <div className="divCommponent-SendMessage-Calendar">
        <SendMessage apartmentShow={apartmentShow} />
        <Calendar apartmentShow={apartmentShow} />
      </div>
    </div>
  );
}

export default ApartmentShow;
