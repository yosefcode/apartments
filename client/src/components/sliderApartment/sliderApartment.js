// import React, { useState, useEffect } from "react";
// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";
// import "./sliderApartment.css";
// import axios from "axios";

// function ApartmentShow() {
//   const [sliderRef] = useKeenSlider({
//     loop: true,
//     rtl: true,
//     slidesPerView: 3,
//     spacing: 10,
//   });

//   let [list, setList] = useState([]);

//   useEffect(() => {
//     axios.get(`/api/list/`).then((res) => {
//       setList(res.data);
//     });
//   }, []);

//   // const firstImage = [
//   //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
//   //   22, 23, 24,
//   // ].map((list) => list);

//   const firstImage = list.map((list) => list.firstImage);

//  for (let i = 0; i < firstImage.length; i++) {
//     console.log(i);
//     const aaa={

//     }
//     <img className="keen-slider__slide number-slide1" src={i} />)
//     return(
//   }

//   console.log(firstImage);
//   return (
//     <div ref={sliderRef} className="keen-slider" dir="ltr">
//       {/* {list.map((list) => (
//         <div className={`keen-slider__slide number-slide1`}>{list.city}</div>
//       ))} */}
//       {/* {list.map((list) => (
//         <div
//           className={`keen-slider__slide number-slide`}
//           key={list._id}
//         >
//           {/* <Link to={"/" + list._id} target="_blank"> */}
//       {/* <div>
//                     <img src={list.firstImage} alt=""></img>
//                   </div> */}
//       {/* <div> */}
//       {/* <div className="keen-slider__slide number-slide2">2</div>
//       <div className="keen-slider__slide number-slide3">3</div>
//       <div className="keen-slider__slide number-slide4">4</div> */}

//       {/* {firstImage.map((firstImage) => (
//       ))} */}
//     </div>
//   );
// }
// export default ApartmentShow;

// //   return (
// //     <div className="project">
// //       <div className="navigation-wrapper">
// //         <div ref={sliderRef} className="keen-slider" dir="ltr">
// //           {list.map((list) => (
// //             <div className={`keen-slider__slide number-slide1`} key={list._id}>
// //               {/* <Link to={"/" + list._id} target="_blank"> */}
// //               {/* <div>
// //                     <img src={list.firstImage} alt=""></img>
// //                   </div> */}
// //               {/* <div> */}
// //               דירת {list.rooms} חדרים - ב{list.city}
// //               <br />
// //               עד {list.beds} מיטות
// //               <br />
// //               {list.short}
// //               {/* </div>
// //                   <div> */}
// //               החל מ{list.price} ש"ח ללילה
// //               <br />
// //               {list.phone}
// //               {/* </div> */}
// //               {/* </Link> */}
// //             </div>
// //           ))}{" "}
// //         </div>
// //         {slider && (
// //           <>
// //             <ArrowLeft
// //               onClick={(e) => e.stopPropagation() || slider.prev()}
// //               disabled={currentSlide === 0}
// //             />
// //             <ArrowRight
// //               onClick={(e) => e.stopPropagation() || slider.next()}
// //               disabled={currentSlide === slider.details().size - 1}
// //             />
// //           </>
// //         )}
// //       </div>
// //       {slider && (
// //         <div className="dots">
// //           {[...Array(slider.details().size).keys()].map((idx) => {
// //             return (
// //               <button
// //                 key={idx}
// //                 onClick={() => {
// //                   slider.moveToSlideRelative(idx);
// //                 }}
// //                 className={"dot" + (currentSlide === idx ? " active" : "")}
// //               />
// //             );
// //           })}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // function ArrowLeft(props) {
// //   const disabeld = props.disabled ? " arrow--disabled" : "";
// //   return (
// //     <svg
// //       onClick={props.onClick}
// //       className={"arrow arrow--left" + disabeld}
// //       xmlns="http://www.w3.org/2000/svg"
// //       viewBox="0 0 24 24"
// //     >
// //       <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
// //     </svg>
// //   );
// // }

// // function ArrowRight(props) {
// //   const disabeld = props.disabled ? " arrow--disabled" : "";
// //   return (
// //     <svg
// //       onClick={props.onClick}
// //       className={"arrow arrow--right" + disabeld}
// //       xmlns="http://www.w3.org/2000/svg"
// //       viewBox="0 0 24 24"
// //     >
// //       <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
// //     </svg>
// //   );
// // }
// // export default Slider;

// import { Carousel } from "react-carousel-minimal";

// function App() {
//   const data = [
//     {
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
//       caption: "San Francisco",
//     },
//     {
//       image:
//         "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
//       caption: "Scotland",
//     },
//     {
//       image:
//         "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
//       caption: "Darjeeling",
//     },
//     {
//       image:
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
//       caption: "San Francisco",
//     },
//     {
//       image:
//         "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
//       caption: "Scotland",
//     },
//     {
//       image:
//         "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
//       caption: "Darjeeling",
//     },
//     {
//       image:
//         "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
//       caption: "San Francisco",
//     },
//     {
//       image:
//         "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
//       caption: "Scotland",
//     },
//     {
//       image:
//         "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
//       caption: "Darjeeling",
//     },
//   ];

//   const captionStyle = {
//     fontSize: "2em",
//     fontWeight: "bold",
//   };
//   const slideNumberStyle = {
//     fontSize: "20px",
//     fontWeight: "bold",
//   };
//   return (
//     <div className="App" dir="ltr">
//       <div style={{ textAlign: "center" }}>
//         <h2>React Carousel Minimal</h2>
//         <p>
//           Easy to use, responsive and customizable carousel component for React
//           Projects.
//         </p>
//         <div
//           style={{
//             padding: "0 20px",
//           }}
//         >
//           <Carousel
//             data={data}
//             time={2000}
//             width="850px"
//             height="500px"
//             captionStyle={captionStyle}
//             radius="10px"
//             slideNumber={true}
//             slideNumberStyle={slideNumberStyle}
//             captionPosition="bottom"
//             automatic={true}
//             dots={true}
//             pauseIconColor="white"
//             pauseIconSize="40px"
//             slideBackgroundColor="darkgrey"
//             slideImageFit="cover"
//             thumbnails={true}
//             thumbnailWidth="100px"
//             // style={{
//             //   textAlign: "center",
//             //   maxWidth: "850px",
//             //   maxHeight: "500px",
//             //   margin: "40px auto",
//             // }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./sliderApartment.css";

export default (props) => {
  const [sliderRef] = useKeenSlider({ slidesPerView: 3, spacing: 15 });

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">1</div>
      <div className="keen-slider__slide number-slide2">2</div>
      <div className="keen-slider__slide number-slide3">3</div>
      <div className="keen-slider__slide number-slide4">4</div>
      <div className="keen-slider__slide number-slide5">5</div>
      <div className="keen-slider__slide number-slide6">6</div>
    </div>
  );
};
