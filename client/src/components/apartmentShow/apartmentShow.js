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
    axios.post("/api/list/" + id).then((res) => {
      setApartmentShow(res.data);
    });
  }, [id]);

  const firstImage = apartmentShow.map((list) => list.firstImage);

  const images = apartmentShow.map((list) => list.images.map((image) => image));

  const allImages = firstImage.concat(images[0]);

  const carouselImages = allImages.map((images) => ({
    src: images,
  }));

  return (
    <div className="description">
      <div>
        {" "}
        {apartmentShow.map((list) => (
          <div key={list._id}>
            <div dir="ltr">
              <Carousel
                isLoop={true}
                isAutoPlaying={true}
                autoPlayInterval={5000}
                transitionDurationMin={1000}
                // transitionSpeed={1000}
                // transitionDurationLimit={1000}
                // // hasIndexBoard={false}
                hasMediaButton={false}
                hasSizeButton="bottomRight"
                // hasThumbnails="bottomRight"
                images={carouselImages}
                style={{ height: 500, width: 800 }}
              />
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

// import React from "react";
// import Carousel from "react-gallery-carousel";
// import aa from "./aa.png";
// import ss from "./ss.png";
// import dd from "./dd.png";
// import "react-gallery-carousel/dist/index.css";

// const App = () => {
//   const aaa = [aa, ss, dd];

//   const images = aaa.map((number) => ({
//     src: number,
//   }));

//   return (
//     <div dir="ltr">
//       <Carousel images={images} style={{ height: 500, width: 800 }} />
//     </div>
//   );
// };

// export default App;
