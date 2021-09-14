import "./bar.css";
import FilterArea from "../filterArea/filterArea";

const Bar = ({ setFilter }) => {
  return (
    <div className="bar">
      <div className="allURL">
        <a className="btnhome" href="/">
          דירות נופש{" "}
        </a>
        <div></div>
        <div></div>
        <div></div>
        <a className="btnsend" href="/send/">
          פרסם דירתך{" "}
        </a>{" "}
      </div>

      <div className="filterArea">
        <FilterArea setFilter={setFilter} />
      </div>
    </div>
  );
};

export default Bar;
