import "./moreApartment.css";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddToFavorite from "../../favorite/addToFavorite/addToFavorite";

const MoreApartment = ({ apartmentShow }) => {
  // const { filter, setFilter } = useContext(AppContext);

  const area = apartmentShow.map((area) => area.area);

  let [apartment, setApartment] = useState([]);

  useEffect(() => {
    axios.post(`/api/list/filter/`, { area: area }).then((res) => {
      setApartment(res.data);
    });
  }, [area]);

  return (
    <div className="divMore">
      <div className="header_div_apartmentShow header_div_apartmentShow1">
        דירות באיזור ה{area}
      </div>
      <div className="more">
        <div className="divAllBoxApartment">
          {" "}
          {apartment.map((apartment) => (
            <div className="boxApartment" key={apartment._id}>
              <div className="addToFavorite">
                <AddToFavorite
                  apartmentForFavorite={apartment}
                  style={{ width: "10%" }}
                />
              </div>
              <Link className="link" to={"/" + apartment._id} target="_blank">
                <div>
                  <img
                    className="imgApartment"
                    src={apartment.images[0]}
                    alt=""
                  ></img>
                </div>
                <div className="infoApartment">
                  <div className="nameApartment">{apartment.nameApartment}</div>
                  <div className="location">{apartment.city}</div>
                  <div className="beds"> עד {apartment.beds} מיטות</div>
                  <div className="price">
                    החל מ- {apartment.price} ש"ח ל{apartment.priceMethod}
                  </div>
                  <div className="phone">{apartment.phone}</div>
                </div>
              </Link>
            </div>
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default MoreApartment;
