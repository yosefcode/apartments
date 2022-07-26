import "./bar.css";
import logo from "./logoDatshe.png";
import mtr from "./mtr.png";
import React, { useState, useEffect, useContext } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AppContext } from "../../variable-Context";
import { Button } from "../../components/Input_select_button/Input_select_button";

const Bar = () => {
  const {
    registeredUser,
    setRegisteredUser,
    uidFirebase,
    detailsUsers,
    setDetailsUsers,
    setUidFirebase,
  } = useContext(AppContext);

  const auth = getAuth();
  const [modal, setModal] = useState(false);

  const exit = () => {
    setDetailsUsers([]);
    setUidFirebase("");
    setRegisteredUser(false);
    signOut(auth)
      .then(() => {})
      .catch((error) => {});

    window.location.href = "/login/";
  };

  return (
    <div className="bar">
      <div className="div_logo">
        <a href="/">
          <img src={mtr} alt="" className="imgLogo" />
          <div className="logo">
            <h2>דאצ'ה</h2>
            <h2>דאצ'ה</h2>
          </div>
          <div className="title_logo">לנפוש באווירה מתאימה</div>
        </a>
      </div>
      <br />
      {/* <img src={logo} alt="" className="imgLogo" /> */}

      <div className="divBar">
        {detailsUsers?.manager === true ? (
          <a href={`/manager/${process.env.REACT_APP_URL_MANAGER}`}>
            <Button
              title={"לדף הניהול"}
              padding={"0.5rem 1.5rem"}
              borderRadius={"10px"}
            />
          </a>
        ) : null}
        {registeredUser ? (
          <div className="divConnect" onClick={() => setModal(true)}>
            <AccountCircleIcon
              style={{
                fontSize: "4rem",
                fontWeight: 900,
                color: "black",
              }}
            />{" "}
            היי, {detailsUsers?.nameUser}{" "}
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
            <Link className="link" to={`/user/${uidFirebase}`}>
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
