import React, { useEffect, useState } from "react";
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

  const personalInformation = {
    password: "",
    passwordAgain: "",
    email: "",
    displayName: "",
  };

  const auth = getAuth();

  const login = () => {
    validator.isEmail(personalInformation.email) &&
    document.getElementById("passwordAgain").value ===
      document.getElementById("password").value &&
    personalInformation.password.length > 5
      ? createUserWithEmailAndPassword(
          auth,
          personalInformation.email,
          personalInformation.password
        )
          .then((userCredential) => {
            updateProfile(auth.currentUser, {
              displayName: personalInformation.displayName,
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
            console.log(personalInformation);

            if (errorCode === "auth/wrong-password") {
              document.getElementById("errLengthPassword").innerHTML =
                "סיסמא שגויה";
            } else if (errorCode === "auth/invalid-email") {
              document.getElementById("errLengthPassword").innerHTML =
                "כתובת מייל לא חוקית";
            } else if (errorCode === "auth/user-not-found") {
              document.getElementById("errLengthPassword").innerHTML =
                "משתמש אינו קיים";
            } else {
              document.getElementById("errLengthPassword").innerHTML =
                "שגיאה בהתחברות";
            }
          })
      : console.log("eror");
    validateEmail();
    validatePassword();
  };

  const validateEmail = () => {
    personalInformation.email.length < 1
      ? (document.getElementById("errEmail").innerHTML = "נא למלא כתובת אימייל")
      : validator.isEmail(personalInformation.email)
      ? (document.getElementById("errEmail").innerHTML = "אימייל  תקין")
      : (document.getElementById("errEmail").innerHTML = "אימייל לא תקין");
  };

  const validatePassword = () => {
    personalInformation.password.length < 1
      ? (document.getElementById("errLengthPassword").innerHTML =
          "נא לבחור סיסמא") &&
        (document.getElementById("errPasswordAgain").innerHTML = "")
      : personalInformation.password.length < 6
      ? (document.getElementById("errLengthPassword").innerHTML =
          "סיסמא מינימום 6 תווים") &&
        (document.getElementById("errPasswordAgain").innerHTML = "")
      : document.getElementById("passwordAgain").value !==
        document.getElementById("password").value
      ? (document.getElementById("errPasswordAgain").innerHTML =
          "הסיסמאות אינם תואמות") &&
        (document.getElementById("errLengthPassword").innerHTML = "סיסמא תקינה")
      : (document.getElementById("errPasswordAgain").innerHTML = "");

    console.log(personalInformation);
  };

  return (
    <div className="lregister">
      <p>הרשמה</p>

      <input
        placeholder="שם"
        type="text"
        onChange={(e) => {
          personalInformation.displayName = e.target.value;
        }}
      />

      <div className="divErr" />

      <input
        placeholder="אימייל"
        type="text"
        onChange={(e) => {
          personalInformation.email = e.target.value;
        }}
      />

      <div id="errEmail" className="divErr" />

      <input
        id="password"
        placeholder="סיסמא"
        type={typePassword}
        onInput={(e) => {
          personalInformation.password = e.target.value;
        }}
      />

      <div id="errLengthPassword" className="divErr" />

      <input
        id="passwordAgain"
        placeholder="אשר סיסמא"
        type={typePassword}
        onInput={(e) => {
          personalInformation.passwordAgain = e.target.value;
        }}
      />

      {/* {typePassword === "password" ? (
            <VisibilityIcon
              className="iconhiden"
              onClick={() => {
                setTypePassword("text");
              }}
            />
          ) : (
            <VisibilityOffIcon
              className="iconhiden"
              onClick={() => {
                setTypePassword("password");
              }}
            />
          )} */}

      <div id="errPasswordAgain" className="divErr" />

      <button onClick={login}>אישור </button>
    </div>
  );
}
