import "./login.css";
import { Person } from "@mui/icons-material/";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { Link } from "react-router-dom";

const Login = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAm6XyXktf-Yp4FcKAIVwqOop5dTtpPKeo",
    authDomain: "loginapartment-9d83c.firebaseapp.com",
    databaseURL: "https://loginapartment-9d83c-default-rtdb.firebaseio.com",
    projectId: "loginapartment-9d83c",
    storageBucket: "loginapartment-9d83c.appspot.com",
    messagingSenderId: "581621671195",
    appId: "1:581621671195:web:c9460ca056d94d63d49fbe",
    measurementId: "G-9T05LHHKK5",
  };

  // const app =
  initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  const provider = new GoogleAuthProvider();

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

  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log(result);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUidUser(user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const exit = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
    setUserConnect(false);
  };

  return (
    <div className="login">
      <div className="a">
        {userConnect === true ? (
          <div>
            <Link className="link" to={"/login/" + uidUser} target="_blank">
              <button>{nameUser}</button>
            </Link>
            <button onClick={exit}>התנתק</button>
          </div>
        ) : (
          <Person
            onClick={login}
            style={{
              fontSize: "4vw",
              color: "blue",
              background: "white",
              borderRadius: "50%",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Login;
