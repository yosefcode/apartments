import "./bar.css";
import logo from "./logo.png";
import React, { useState, useEffect, useContext } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AppContext } from "../../variable-Context";

const Bar = () => {
  const { userConnect, setUserConnect, uidFirebase } = useContext(AppContext);

  const auth = getAuth();
  const [modal, setModal] = useState(false);

  const exit = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
    setUserConnect([]);
    window.location.href = "/login/";
  };

  return (
    <div className="bar">
      <div className="divBar">
        <a href="/">
          <img src={logo} alt="" className="imgLogo" />
        </a>
      </div>

      <div className="divBar">
        <a href="/manager">
          <button>כניסת מנהל</button>
        </a>
        {userConnect ? (
          <div className="divConnect" onClick={() => setModal(true)}>
            <AccountCircleIcon
              style={{
                fontSize: "4rem",
                fontWeight: 900,
                color: "black",
              }}
            />{" "}
            היי, {userConnect.nameUser}{" "}
          </div>
        ) : (
          <Link className="link" to={"/login/"}>
            <div className="divConnect">
              <AccountCircleIcon
                style={{
                  fontSize: "4rem",
                  fontWeight: 900,
                  color: "black",
                }}
              />{" "}
              התחברות / הרשמה{" "}
            </div>
          </Link>
        )}
      </div>

      {modal && (
        <div className="div_modal" onClick={() => setModal(false)}>
          <div className="allConnect">
            <Link className="link" to={`/login/${uidFirebase}`}>
              <div className="divConnect_modal">
                <PowerSettingsNewIcon
                  className="iconEnter"
                  style={{
                    fontSize: "2rem",
                    fontWeight: 900,
                    color: "green",
                    marginInlineEnd: "10px",
                  }}
                />{" "}
                לאיזור האישי
              </div>
            </Link>
            <hr
              style={{
                borderTop: "1px solid black",
                width: "100%",
                margin: "10px",
              }}
            />
            <div className="divConnect_modal" onClick={exit}>
              <PowerSettingsNewIcon
                style={{
                  fontSize: "2rem",
                  fontWeight: 900,
                  color: "red",
                  marginInlineEnd: "10px",
                }}
              />
              התנתק
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bar;
