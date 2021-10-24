import "./bar.css";
import logo from "./logo.png";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Bar = () => {
  const auth = getAuth();

  const [uidUser, setUidUser] = useState("");
  const [userConnect, setUserConnect] = useState();
  const [nameUser, setNameUser] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUidUser(user.uid);
        setNameUser(user.displayName);
        setUserConnect(true);
      }
    });
  }, [auth, uidUser, userConnect]);

  const exit = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
    setUserConnect(false);
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
        {userConnect === true ? (
          <div>
            <div className="divConnect">היי, {nameUser}</div>
            <div className="allConnect">
              <Link className="link" to={"/login/" + uidUser}>
                <div className="divConnect">
                  <PowerSettingsNewIcon
                    className="iconEnter"
                    style={{
                      fontSize: "1.6vw",
                      fontWeight: 900,
                      color: "green",
                    }}
                  />{" "}
                  לאיזור האישי
                </div>
              </Link>
              <div className="divConnect" onClick={exit}>
                <PowerSettingsNewIcon
                  style={{
                    fontSize: "1.6vw",
                    fontWeight: 900,
                    color: "red",
                  }}
                />
                התנתק
              </div>
            </div>
          </div>
        ) : (
          <Link className="link" to={"/login/"}>
            <div className="divConnect">
              <PowerSettingsNewIcon
                style={{
                  fontSize: "2vw",
                  fontWeight: 900,
                  color: "green",
                }}
              />{" "}
              התחבר לאיזור האישי
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Bar;
