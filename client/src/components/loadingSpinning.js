import { SpinningCircles } from "react-loading-icons";

function Spinning() {
  return (
    <div style={style}>
      <SpinningCircles
        height="4em"
        width="4em"
        fill="rgb(28, 2, 99)"
        stroke="rgb(28, 2, 99)"
        strokeOpacity={1}
        fillOpacity={1}
        speed={1}
      />
    </div>
  );
}

export default Spinning;

const style = {
  width: "100%",
  marginTop: "50px",
  textAlign: "center",
  fontSize: "2rem",
};
