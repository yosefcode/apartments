import "./bar.css";
import iconhome from "./iconPage.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
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
          <img style={{ height: "80%" }} src={iconhome} alt="" />
        </a>
        <div></div>
        <div></div>
        <div></div>
        <a className="btnhome" href="/login/" target={"_blank"}>
          <PersonIcon
            style={{
              fontSize: "4vw",
              color: "blue",
              background: "white",
              borderRadius: "50%",
            }}
          />{" "}
        </a>{" "}
      </div>
    </div>
  );
};

export default Bar;
