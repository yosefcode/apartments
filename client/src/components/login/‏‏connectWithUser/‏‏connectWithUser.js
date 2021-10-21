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

  const login = () => {
    validator.isEmail(email.current) && password.current.length > 5
      ? signInWithEmailAndPassword(auth, email.current, password.current)
          .then((userCredential) => {
            setErrorMessage("התחברת בהצלחה");
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);

            errorCode === "auth/wrong-password"
              ? setErrorMessage("סיסמא שגויה")
              : errorCode === "auth/invalid-email"
              ? setErrorMessage("כתובת מייל לא חוקית")
              : errorCode === "auth/user-not-found"
              ? setErrorMessage("משתמש אינו קיים")
              : setErrorMessage("שגיאה בהתחברות");
          })
      : console.log("eror");
    // validateEmail();
    // validatePassword();
  };

  const resetPassword = () => {
    sendPasswordResetEmail(auth, email.current)
      .then(() => {
        setErrorMessage("נשלח מייל לאיפוס הסיסמא");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
      });
    setTimeout(function () {
      setConnectAndReset(true);
      setErrorMessage("");
    }, 3000);
  };

  // const validateEmail = () => {
  //   personalInformation.email.length < 1
  //     ? (document.getElementById("errEmailConect").innerHTML =
  //         "נא למלא כתובת אימייל")
  //     : validator.isEmail(personalInformation.email)
  //     ? (document.getElementById("errEmailConect").innerHTML = "אימייל  תקין")
  //     : (document.getElementById("errEmailConect").innerHTML =
  //         "אימייל לא תקין");
  // };

  // const validatePassword = () => {
  //   personalInformation.password.length < 1
  //     ? (document.getElementById("errPassword").innerHTML = "יש להכניס סיסמא")
  //     : personalInformation.password.length < 6
  //     ? (document.getElementById("errPassword").innerHTML =
  //         "סיסמא מינימום 6 תווים")
  //     : (document.getElementById("errPassword").innerHTML = "");
  //   console.log(personalInformation);
  // };

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

            <div id="errEmailConect" className="divErr" />
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

          <div className="btnmodal">
            <button onClick={login}>אישור</button>
            <br />
            <div
              style={{ cursor: "pointer", fontWeight: 700 }}
              onClick={() => {
                setConnectAndReset(false);
                setErrorMessage("");
              }}
            >
              {" "}
              שכחת סיסמא?
            </div>
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

          <div className="btnmodal">
            <button onClick={resetPassword}>אפס סיסמא </button>
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
