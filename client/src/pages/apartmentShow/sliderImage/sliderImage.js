import "./sliderImage.css";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

function SliderImage({ apartmentShow }) {
  return (
    <div dir="ltr" className="carousel">
      {apartmentShow.map((list) => (
        <Carousel
          isLoop={true}
          isAutoPlaying={true}
          autoPlayInterval={10000}
          transitionDurationMin={1000}
          // // hasIndexBoard={false}
          hasMediaButton={false}
          hasSizeButton="bottomRight"
          // hasThumbnails="bottomRight"
          images={list.images.map((image) => ({ src: image }))}
          // style={{ height: 500, width: "100%" }}
        />
      ))}
    </div>
  );
}

export default SliderImage;
