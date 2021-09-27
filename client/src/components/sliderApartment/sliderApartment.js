import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./sliderApartment.css";
import axios from "axios";
import { Carousel } from "@trendyol-js/react-carousel";

const Slider = () => {
  const [pause, setPause] = React.useState(false);
  const timer = React.useRef();
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
    loop: true,
    duration: 2000,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
  });

  React.useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [sliderRef]);

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 15000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  let [list, setList] = useState([]);

  useEffect(() => {
    axios.get(`/api/list/`).then((res) => {
      setList(res.data);
    });
  }, []);
  // console.log(listaa);

  const firstImage = list.map((list) => list);

  // const firstImage = list.map((list) => list.firstImage);

  console.log(firstImage);
  const aaa = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9rG7FI4Vtf3yi11DuqbJKqGIL18x0sfFhjw&usqp=CAU",
      rooms: 6,
      beds: 4,
      price: 2000,
      area: "jerusalem",
      city: "בית שמש",
      phone: "050-9876543",
      short: "קק, צמוד לבית כנסת, מרחבי דשא.",
      long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9rG7FI4Vtf3yi11DuqbJKqGIL18x0sfFhjw&usqp=CAU",
      rooms: 6,
      beds: 4,
      price: 2000,
      area: "jerusalem",
      city: "בית שמש",
      phone: "050-9876543",
      short: "קק, צמוד לבית כנסת, מרחבי דשא.",
      long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9rG7FI4Vtf3yi11DuqbJKqGIL18x0sfFhjw&usqp=CAU",
      rooms: 6,
      beds: 4,
      price: 2000,
      area: "jerusalem",
      city: "בית שמש",
      phone: "050-9876543",
      short: "קק, צמוד לבית כנסת, מרחבי דשא.",
      long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9rG7FI4Vtf3yi11DuqbJKqGIL18x0sfFhjw&usqp=CAU",
      rooms: 6,
      beds: 4,
      price: 2000,
      area: "jerusalem",
      city: "בית שמש",
      phone: "050-9876543",
      short: "קק, צמוד לבית כנסת, מרחבי דשא.",
      long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9rG7FI4Vtf3yi11DuqbJKqGIL18x0sfFhjw&usqp=CAU",
      rooms: 6,
      beds: 4,
      price: 2000,
      area: "jerusalem",
      city: "בית שמש",
      phone: "050-9876543",
      short: "קק, צמוד לבית כנסת, מרחבי דשא.",
      long: "קוטג' חדש נקי ומטופח + סלון מטבח. חצר מאובזרת עם נדנדות וטרמפולינה. נוף מדהים פתוח, ללא היזק ראיה. גינת משחקים ובית כנסת צמודים. במרחק הליכה מפארק ענק. מקום אידיאלי לשבתות משפחתיות.",
    },
  ];

  return (
    <div className="project" dir="ltr">
      <div className="navigation-wrapper" ref={sliderRef}>
        <div className="keen-slider">
          {aaa.map((list) => (
            <div className={`keen-slider__slide number-slide`} key={list._id}>
              דירת {list.rooms} חדרים - ב{list.city}
              <br />
              עד {list.beds} מיטות
              <br />
              {list.short}
              החל מ{list.price} ש"ח ללילה
              <br />
              {list.phone}
            </div>
          ))}{" "}
        </div>
        {slider && (
          <>
            <ArrowLeft
              onClick={(e) => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
            />
            <ArrowRight
              onClick={(e) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
      </div>
      {slider && (
        <div className="dots">
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

function ArrowLeft(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--left" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  );
}

function ArrowRight(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--right" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  );
}
export default Slider;
