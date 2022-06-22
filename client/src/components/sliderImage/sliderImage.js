import "./sliderImage.css";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

function SliderImage({ item }) {
  return (
    <div dir="ltr" className="carousel">
      {/* {item.map((item) => ( */}
      <Carousel
        isLoop={true}
        isAutoPlaying={true}
        autoPlayInterval={10000}
        transitionDurationMin={1000}
        // // hasIndexBoard={false}
        hasMediaButton={false}
        hasSizeButton="bottomRight"
        // hasThumbnails="bottomRight"
        images={item.images.map((image) => ({ src: image }))}
        // style={{ height: 500, width: "100%" }}
      />
      {/* ))} */}
    </div>
  );
}

export default SliderImage;
