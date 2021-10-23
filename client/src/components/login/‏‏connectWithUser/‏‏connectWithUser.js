import React, { useEffect, useState, useRef } from "react";
import "./‏‏connectWithUser.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import validator from "validator";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

export default function ConnectWithUser() {
  const [typepassword, setTypepassword] = useState("password");
  const [connectAndReset, setConnectAndReset] = useState(true);
  const [errMessage, setErrorMessage] = useState();

  const email = useRef("");
  const password = useRef("");

  const auth = getAuth();

  const errorFirebase = (errorCode) => {
    errorCode === "auth/wrong-password"
      ? setErrorMessage("סיסמא שגויה")
      : errorCode === "auth/invalid-email"
      ? setErrorMessage("כתובת מייל לא תקינה")
      : errorCode === "auth/user-not-found"
      ? setErrorMessage("משתמש אינו קיים")
      : errorCode === "auth/user-disabled"
      ? setErrorMessage("החשבון מושבת")
      : setErrorMessage("שגיאה בהתחברות");
  };

  const login = () => {
    !validator.isEmail(email.current)
      ? setErrorMessage("כתובת מייל לא תקינה")
      : password.current.length < 6
      ? setErrorMessage("על הסיסמא להכיל מינימום 6 תווים")
      : signInWithEmailAndPassword(auth, email.current, password.current)
          .then((userCredential) => {
            setErrorMessage("התחברת בהצלחה");
            const user = userCredential.user;
            console.log(user);
            window.location.href = "/login/" + user.uid;
          })
          .catch((error) => {
            const errorCode = error.code;
            errorFirebase(errorCode);
          });
  };

  const resetPassword = () => {
    sendPasswordResetEmail(auth, email.current)
      .then(() => {
        setErrorMessage("נשלח מייל לאיפוס הסיסמא");
        setTimeout(function () {
          setConnectAndReset(true);
          setErrorMessage("");
        }, 3000);
      })
      .catch((error) => {
        const errorCode = error.code;
        errorFirebase(errorCode);
      });
  };

  return (
    <div className="‏‏connectWithUser">
      {connectAndReset === true ? (
        <div>
          <p>רשומים כבר?</p>
          <div>
            <input
              placeholder="אימייל"
              type="text"
              onChange={(e) => {
                email.current = e.target.value;
                setErrorMessage("");
              }}
            />

            <div className="divErr" />
            <div className="diviconhiden">
              <input
                placeholder="סיסמא"
                type={typepassword}
                onChange={(e) => {
                  password.current = e.target.value;
                  setErrorMessage("");
                }}
              ></input>
              {typepassword === "password" ? (
                <VisibilityIcon
                  className="iconhiden"
                  style={{
                    fontSize: "1.7vw ",
                    color: "black",
                  }}
                  onClick={() => {
                    setTypepassword("text");
                  }}
                />
              ) : (
                <VisibilityOffIcon
                  className="iconhiden"
                  style={{
                    fontSize: "1.7vw ",
                    color: "black",
                  }}
                  onClick={() => {
                    setTypepassword("password");
                  }}
                />
              )}
            </div>

            <div className="divErr">{errMessage}</div>
          </div>

          <div>
            <button onClick={login}>אישור</button>
            <br />
            שכחת סיסמא?{" "}
            <span
              className="divReset"
              onClick={() => {
                setConnectAndReset(false);
                setErrorMessage("");
              }}
            >
              לחץ כאן
            </span>
          </div>
        </div>
      ) : (
        <div>
          <p>איפוס סיסמא</p>
          <div>
            <input
              placeholder="הכנס את כתובת המייל שאיתה נרשמת"
              type="text"
              onChange={(e) => {
                email.current = e.target.value;
              }}
            />

            <div className="divErr">{errMessage}</div>
          </div>

          <div>
            <button onClick={resetPassword}>אפס סיסמא</button>
            <br />
            <br />
            <button
              onClick={() => {
                setConnectAndReset(true);
                setErrorMessage("");
              }}
            >
              ביטול{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
