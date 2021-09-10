import "./filterArea.css";

function FilterArea({ setFilter, filter }) {
  return (
    <div className="filterArea">
      <button
        className="btnarea"
        onClick={() => {
          setFilter({ area: ["דרום"] });
        }}
      >
        דירות בדרום
      </button>{" "}
      <button
        className="btnarea"
        onClick={() => {
          setFilter({ area: ["צפון"] });
        }}
      >
        דירות בצפון
      </button>{" "}
      <button
        className="btnarea"
        onClick={() => {
          setFilter({ area: ["מרכז"] });
        }}
      >
        דירות במרכז
      </button>{" "}
      <button
        className="btnarea"
        onClick={() => {
          setFilter({ area: ["ירושלים"] });
        }}
      >
        דירות בירושלים
      </button>
    </div>
  );
}

export default FilterArea;
