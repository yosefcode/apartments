import "./bar.css";
import { useParams } from "react-router-dom";

const Bar = ({ setValue }) => {
  const { id } = useParams();

  return (
    <div className="bar">
      <div className="allURL">
        <a
          className={id === "a" ? "divtrue" : "divfalse"}
          href="/דף-הבית/a"
          onClick={() => {
            setValue("");
          }}
        >
          דף הבית
        </a>
        <a
          className={id === "b" ? "divtrue" : "divfalse"}
          // href="/דירות-בצפון/b"
          // href="/דף-הבית/a"
          onClick={() => {
            setValue("jerusalem");
          }}
        >
          דירות בצפון{" "}
        </a>{" "}
        <a
          className={id === "c" ? "divtrue" : "divfalse"}
          // href="/דירות-בדרום/c"
          href="/דף-הבית/a"
          onClick={() => {
            setValue("north");
          }}
        >
          דירות בדרום{" "}
        </a>{" "}
        <a
          className={id === "d" ? "divtrue" : "divfalse"}
          href="/דירות-במרכז/d"
        >
          דירות במרכז{" "}
        </a>{" "}
        <a
          // className={id === "e" ? "divtrue" : "divfalse"}
          href="/דירות-באיזור-ירושלים/e"
        >
          דירות באיזור ירושלים{" "}
        </a>{" "}
        <a className={id === "f" ? "divtrue" : "divfalse"} href="/פרסם-דירה/f">
          פרסם דירה{" "}
        </a>{" "}
      </div>
    </div>
  );
};

export default Bar;
