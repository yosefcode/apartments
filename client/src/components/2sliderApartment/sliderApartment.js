import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./sliderApartment.css";
import axios from "axios";

function ApartmentShow() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    rtl: true,
    slidesPerView: 3,
    spacing: 10,
  });

  let [list, setList] = useState([]);

  useEffect(() => {
    axios.get(`/api/list/`).then((res) => {
      setList(res.data);
    });
  }, []);

  const firstImage = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ].map((list) => list);

  return (
    <div ref={sliderRef} className="keen-slider" dir="ltr">
      {firstImage.map((list) => (
        <div className={`keen-slider__slide`}>{list}</div>
      ))}
      {/* {list.map((list) => (
        <div
          className={`keen-slider__slide number-slide`}
          key={list._id}
        >
          {/* <Link to={"/" + list._id} target="_blank"> */}
      {/* <div>
                    <img src={list.firstImage} alt=""></img>
                  </div> */}
      {/* <div> */}
      {/* <div className="keen-slider__slide number-slide2">2</div>
      <div className="keen-slider__slide number-slide3">3</div>
      <div className="keen-slider__slide number-slide4">4</div>
      <div className="keen-slider__slide number-slide5">5</div>
      <div className="keen-slider__slide number-slide6">6</div> */}
    </div>
  );
}
export default ApartmentShow;

//   return (
//     <div className="project">
//       <div className="navigation-wrapper">
//         <div ref={sliderRef} className="keen-slider" dir="ltr">
//           {list.map((list) => (
//             <div className={`keen-slider__slide number-slide1`} key={list._id}>
//               {/* <Link to={"/" + list._id} target="_blank"> */}
//               {/* <div>
//                     <img src={list.firstImage} alt=""></img>
//                   </div> */}
//               {/* <div> */}
//               דירת {list.rooms} חדרים - ב{list.city}
//               <br />
//               עד {list.beds} מיטות
//               <br />
//               {list.short}
//               {/* </div>
//                   <div> */}
//               החל מ{list.price} ש"ח ללילה
//               <br />
//               {list.phone}
//               {/* </div> */}
//               {/* </Link> */}
//             </div>
//           ))}{" "}
//         </div>
//         {slider && (
//           <>
//             <ArrowLeft
//               onClick={(e) => e.stopPropagation() || slider.prev()}
//               disabled={currentSlide === 0}
//             />
//             <ArrowRight
//               onClick={(e) => e.stopPropagation() || slider.next()}
//               disabled={currentSlide === slider.details().size - 1}
//             />
//           </>
//         )}
//       </div>
//       {slider && (
//         <div className="dots">
//           {[...Array(slider.details().size).keys()].map((idx) => {
//             return (
//               <button
//                 key={idx}
//                 onClick={() => {
//                   slider.moveToSlideRelative(idx);
//                 }}
//                 className={"dot" + (currentSlide === idx ? " active" : "")}
//               />
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// function ArrowLeft(props) {
//   const disabeld = props.disabled ? " arrow--disabled" : "";
//   return (
//     <svg
//       onClick={props.onClick}
//       className={"arrow arrow--left" + disabeld}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//     >
//       <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
//     </svg>
//   );
// }

// function ArrowRight(props) {
//   const disabeld = props.disabled ? " arrow--disabled" : "";
//   return (
//     <svg
//       onClick={props.onClick}
//       className={"arrow arrow--right" + disabeld}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//     >
//       <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
//     </svg>
//   );
// }
// export default Slider;
