import "./filterArea.css";
import { Link } from "react-router-dom";

function FilterArea({ setFilter }) {
  const listArea = [
    { area: "בצפון", filter: "צפון" },
    { area: "במרכז", filter: "מרכז" },
    { area: "בירושלים", filter: "ירושלים" },
    { area: "בדרום", filter: "דרום" },
    { area: "להחלפה", filter: "" },
  ];

  return (
    <div>
      {listArea.map((area) => (
        <Link to={"/"}>
          <button
            className="btnarea"
            onClick={() => {
              setFilter({ area: [area.filter] });
            }}
          >
            דירות {area.area}{" "}
          </button>
        </Link>
      ))}
    </div>
  );
}

export default FilterArea;
