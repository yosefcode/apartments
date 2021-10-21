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
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            console.log(errorCode);
            console.log(errorMessage);

            // if (errorCode === "auth/wrong-password") {
            //   document.getElementById("errLengthPassword").innerHTML =
            //     "סיסמא שגויה";
            // } else if (errorCode === "auth/invalid-email") {
            //   document.getElementById("errLengthPassword").innerHTML =
            //     "כתובת מייל לא חוקית";
            // } else if (errorCode === "auth/user-not-found") {
            //   document.getElementById("errLengthPassword").innerHTML =
            //     "משתמש אינו קיים";
            // } else {
            //   document.getElementById("errLengthPassword").innerHTML =
            //     "שגיאה בהתחברות";
            // }
          })
      : console.log("eror");
    // validateEmail();
    // validatePassword();
    console.log(displayName.current);
  };

  // const validateEmail = () => {
  //   email.length < 1
  //     ? (document.getElementById("errEmail").innerHTML = "נא למלא כתובת אימייל")
  //     : validator.isEmail(email)
  //     ? (document.getElementById("errEmail").innerHTML = "אימייל  תקין")
  //     : (document.getElementById("errEmail").innerHTML = "אימייל לא תקין");
  // };

  // const validatePassword = () => {
  //   password.length < 1
  //     ? (document.getElementById("errLengthPassword").innerHTML =
  //         "נא לבחור סיסמא") &&
  //       (document.getElementById("errPasswordAgain").innerHTML = "")
  //     : password.length < 6
  //     ? (document.getElementById("errLengthPassword").innerHTML =
  //         "סיסמא מינימום 6 תווים") &&
  //       (document.getElementById("errPasswordAgain").innerHTML = "")
  //     : document.getElementById("passwordAgain").value !==
  //       document.getElementById("password").value
  //     ? (document.getElementById("errPasswordAgain").innerHTML =
  //         "הסיסמאות אינם תואמות") &&
  //       (document.getElementById("errLengthPassword").innerHTML = "סיסמא תקינה")
  //     : (document.getElementById("errPasswordAgain").innerHTML = "");

  //   console.log(personalInformation);
  // };

  return (
    <div className="lregister">
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
          id="password"
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
          id="passwordAgain"
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

      <button onClick={login}>אישור </button>
    </div>
  );
}
