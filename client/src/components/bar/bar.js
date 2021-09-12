import "./bar.css";
import { useParams } from "react-router-dom";

const Bar = ({ setValue }) => {
  const { id } = useParams();

  return (
    <div className="bar">
      <div className="allURL">
        <a
          className={id === "a" ? "divtrue" : "divfalse"}
          href="/home/"
          onClick={() => {
            setValue("");
          }}
        >
          דף הבית
        </a>
        <a className={id === "f" ? "divtrue" : "divfalse"} href="/send/">
          פרסם דירה{" "}
        </a>{" "}
      </div>
    </div>
  );
};

export default Bar;
