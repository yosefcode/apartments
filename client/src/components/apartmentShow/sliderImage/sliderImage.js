import "./sliderImage.css";
import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

function SliderImage({ apartmentShow }) {
  const firstImage = apartmentShow.map((list) => list.firstImage);

  const images = apartmentShow.map((list) => list.images.map((image) => image));

  const allImages = firstImage.concat(images[0]);

  const carouselImages = allImages.map((images) => ({
    src: images,
  }));

  return (
    <div dir="ltr" className="carousel">
      <Carousel
        isLoop={true}
        isAutoPlaying={true}
        autoPlayInterval={5000}
        transitionDurationMin={1000}
        // // hasIndexBoard={false}
        hasMediaButton={false}
        hasSizeButton="bottomRight"
        // hasThumbnails="bottomRight"
        images={carouselImages}
        // style={{ height: 500, width: 800, margin: 50 }}
      />
    </div>
  );
}

export default SliderImage;
