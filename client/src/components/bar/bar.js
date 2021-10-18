import "./bar.css";
import logo from "./logo.png";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";

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
            <Link className="link" to={"/login/" + uidUser} target="_blank">
              <button>{nameUser}</button>
            </Link>
            <button onClick={exit}>התנתק</button>
          </div>
        ) : (
          <a href="/login/">
            <img src={logo} alt="" className="imgLogo" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Bar;
