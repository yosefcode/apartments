import "./bar.css";
import logo from "./logo.png";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Bar = () => {
  const auth = getAuth();

  const [uidUser, setUidUser] = useState("");
  const [userConnect, setUserConnect] = useState();
  const [nameUser, setNameUser] = useState("");
  const [modal, setModal] = useState(false);

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
          <div className="divConnect" onClick={() => setModal(true)}>
            <AccountCircleIcon
              style={{
                fontSize: "4rem",
                fontWeight: 900,
                color: "black",
              }}
            />{" "}
            היי, {nameUser}{" "}
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
            <Link className="link" to={"/login/" + uidUser}>
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
