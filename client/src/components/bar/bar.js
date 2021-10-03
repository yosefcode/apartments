import "./bar.css";

const Bar = () => {
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
    </div>
  );
};

export default Bar;
