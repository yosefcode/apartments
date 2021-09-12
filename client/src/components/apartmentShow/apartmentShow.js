import "./apartmentShow.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

function ApartmentShow() {
  const { id } = useParams();

  const [apartmentShow, setApartmentShow] = useState([]);

  useEffect(() => {
    axios.get("/api/list/show/" + id).then((res) => {
      setApartmentShow(res.data);
    });
  }, [id]);

  const firstImage = apartmentShow.map((list) => list.firstImage);

  const images = apartmentShow.map((list) => list.images.map((image) => image));

  const allImages = firstImage.concat(images[0]);

  return (
    <div className="description">
      <div>
        {" "}
        {apartmentShow.map((list) => (
          <div>
            <div dir="ltr">
              <Carousel
                isLoop={true}
                // hasIndexBoard={false}
                hasMediaButton={false}
                hasSizeButton="bottomRight"
                hasThumbnails="centerCenter"
                // shouldMinimizeOnSwipeDown={false}
                // images={images}
                style={{ height: 500, width: 800 }}
              >
                {allImages.map((images) => (
                  <img
                    src={images}
                    alt=""
                    style={{ height: 500, width: 800 }}
                  ></img>
                ))}
              </Carousel>
            </div>

            <div>
              דירת {list.rooms} חדרים - ב{list.city}
              <br />
              עד {list.beds} מיטות
              <br />
              {list.long}
            </div>
            <div>
              החל מ{list.price} ש"ח ללילה
              <br />
              {list.phone}
            </div>
          </div>
        ))}{" "}
      </div>
    </div>
  );
}

export default ApartmentShow;
