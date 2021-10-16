import "./bar.css";
import { Home } from "@mui/icons-material/";
import Login from "../login/login";

const Bar = () => {
  return (
    <div className="bar">
      <div class="waveWrapper waveAnimation">
        <div class="waveWrapperInner bgTop">
          <div
            class="wave waveTop"
            style={{
              backgroundImage:
                "  url(http://front-end-noobs.com/jecko/img/wave-top.png)",
            }}
          ></div>
        </div>
        <div class="waveWrapperInner bgMiddle">
          <div
            class="wave waveMiddle"
            style={{
              backgroundImage:
                "url(http://front-end-noobs.com/jecko/img/wave-mid.png)",
            }}
          ></div>
        </div>
        <div class="waveWrapperInner bgBottom">
          <div
            class="wave waveBottom"
            style={{
              backgroundImage:
                "url(http://front-end-noobs.com/jecko/img/wave-bot.png) ",
            }}
          ></div>
        </div>
      </div>
      <div className="allURL">
        <a className="btnhome" href="/">
          {" "}
          <Home
            style={{
              fontSize: "6vw",
              color: "black",
              background: "white",
              borderRadius: "50%",
            }}
          />
        </a>
        <div></div>
        <div></div>
        <div></div>
        <div className="btnhome">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Bar;
