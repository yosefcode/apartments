import React, { useRef, useState } from "react";
import "./register.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import validator from "validator";

export default function Register() {
  const [typePassword, setTypePassword] = useState("password");
  const [typePasswordAgain, setTypePasswordAgain] = useState("password");
  const [errMessageEmail, setErrorMessageEmail] = useState("");
  const [errMessagePassword, setErrorMessagePassword] = useState("");
  const [errMessagepasswordAgain, setErrorMessagePasswordAgain] = useState("");

  const displayName = useRef("");
  const email = useRef("");
  const password = useRef("");
  const passwordAgain = useRef("");

  const auth = getAuth();

  const login = () => {
    validator.isEmail(email.current) &&
    password.current === passwordAgain.current &&
    password.current.length > 5
      ? createUserWithEmailAndPassword(auth, email.current, password.current)
          .then((userCredential) => {
            updateProfile(auth.currentUser, {
              displayName: displayName.current,
            });
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);

            if (errorCode === "auth/weak-password") {
              setErrorMessagePassword("סיסמא חלשה");
              setErrorMessageEmail("");
              setErrorMessagePasswordAgain("");
            } else if (errorCode === "auth/invalid-email") {
              setErrorMessageEmail("כתובת מייל לא תקינה");
              setErrorMessagePassword("");
              setErrorMessagePasswordAgain("");
            } else if (errorCode === "auth/email-already-in-use") {
              setErrorMessageEmail("משתמש זה כבר נרשם באתר");
              setErrorMessagePassword("");
              setErrorMessagePasswordAgain("");
            } else {
              setErrorMessageEmail("");
              setErrorMessagePassword("");
              setErrorMessagePasswordAgain("שגיאת התחברות");
            }
          })
      : console.log("eror");
    validateEmail();
    validatePassword();
    console.log(displayName.current);
  };

  const validateEmail = () => {
    email.current.length < 1
      ? setErrorMessageEmail("נא למלא כתובת אימייל")
      : !validator.isEmail(email.current)
      ? setErrorMessageEmail("כתובת מייל לא תקינה")
      : setErrorMessageEmail("");
  };

  const validatePassword = () => {
    if (password.current.length < 1) {
      setErrorMessagePassword("נא לבחור סיסמא");
      setErrorMessagePasswordAgain("");
    } else if (password.current.length < 6) {
      setErrorMessagePassword("סיסמא מינימום 6 תווים");
      setErrorMessagePasswordAgain("");
    } else if (password.current !== passwordAgain.current) {
      setErrorMessagePasswordAgain("הסיסמאות אינם תואמות");
      setErrorMessagePassword("");
    } else {
      setErrorMessagePassword("");
      setErrorMessagePasswordAgain("");
    }
  };

  return (
    <div className="register">
      <p>הרשמה</p>
      <input type="text" className="noneDisplay" />
      <input type="password" className="noneDisplay" />

      <input
        placeholder="שם"
        type="text"
        onChange={(e) => {
          displayName.current = e.target.value;
        }}
      />

      <div className="divErr" />

      <input
        placeholder="אימייל"
        type="text"
        onChange={(e) => {
          email.current = e.target.value;
        }}
      />

      <div className="divErr">{errMessageEmail}</div>

      <div className="diviconhiden">
        <input
          placeholder="סיסמא"
          type={typePassword}
          onChange={(e) => {
            password.current = e.target.value;
          }}
        />{" "}
        {typePassword === "password" ? (
          <VisibilityIcon
            className="iconhiden"
            style={{
              fontSize: "1.7vw ",
              color: "black",
            }}
            onClick={() => {
              setTypePassword("text");
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
              setTypePassword("password");
            }}
          />
        )}
      </div>

      <div className="divErr">{errMessagePassword}</div>

      <div className="diviconhiden">
        <input
          placeholder="אשר סיסמא"
          type={typePasswordAgain}
          onChange={(e) => {
            passwordAgain.current = e.target.value;
          }}
        />{" "}
        {typePasswordAgain === "password" ? (
          <VisibilityIcon
            className="iconhiden"
            style={{
              fontSize: "1.7vw ",
              color: "black",
            }}
            onClick={() => {
              setTypePasswordAgain("text");
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
              setTypePasswordAgain("password");
            }}
          />
        )}
      </div>

      <div className="divErr">{errMessagepasswordAgain}</div>

      <button onClick={login}>הרשם</button>
    </div>
  );
}
