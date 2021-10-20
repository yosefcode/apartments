import React, { useEffect, useState } from "react";
import "./‏‏connectWithUser.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import validator from "validator";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function ConnectWithUser() {
  const [typepassword, setTypepassword] = useState("password");

  const personalInformation = {
    password: "",
    email: "",
  };

  const auth = getAuth();
  console.log(personalInformation);

  const login = () => {
    // validator.isEmail(personalInformation.email) &&
    // personalInformation.password.length > 5
    //   ?
    signInWithEmailAndPassword(
      auth,
      personalInformation.email,
      personalInformation.password
    )
      .then((userCredential) => {
        document.getElementById("errEmailConect").innerHTML = "התחברת בהצלחה";
        document.getElementById("errPassword").innerHTML = "התחברת בהצלחה";
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        console.log(personalInformation);

        if (errorCode === "auth/wrong-password") {
          document.getElementById("errPassword").innerHTML = "סיסמא שגויה";
        } else if (errorCode === "auth/invalid-email") {
          document.getElementById("errPassword").innerHTML =
            "כתובת מייל לא חוקית";
        } else if (errorCode === "auth/user-not-found") {
          document.getElementById("errPassword").innerHTML = "משתמש אינו קיים";
        } else {
          document.getElementById("errPassword").innerHTML = "שגיאה בהתחברות";
        }
      });

    //   : console.log("eror");
    // validateEmail();
    // validatePassword();
  };

  const validateEmail = () => {
    personalInformation.email.length < 1
      ? (document.getElementById("errEmailConect").innerHTML =
          "נא למלא כתובת אימייל")
      : validator.isEmail(personalInformation.email)
      ? (document.getElementById("errEmailConect").innerHTML = "אימייל  תקין")
      : (document.getElementById("errEmailConect").innerHTML =
          "אימייל לא תקין");
  };

  const validatePassword = () => {
    personalInformation.password.length < 1
      ? (document.getElementById("errPassword").innerHTML = "יש להכניס סיסמא")
      : personalInformation.password.length < 6
      ? (document.getElementById("errPassword").innerHTML =
          "סיסמא מינימום 6 תווים")
      : (document.getElementById("errPassword").innerHTML = "");

    console.log(personalInformation);
  };

  return (
    <div className="‏‏connectWithUser">
      <p>רשומים כבר?</p>
      <div>
        <input
          placeholder="אימייל"
          type="text"
          onChange={(e) => {
            personalInformation.email = e.target.value;
          }}
        />

        <div id="errEmailConect" className="divErr" />
        <input
          placeholder="סיסמא"
          type={typepassword}
          onChange={(e) => {
            personalInformation.password = e.target.value;
          }}
        />
        <div id="errPassword" className="divErr" />
      </div>

      {/* <div className="diviconhiden">
          {typepassword === "password" ? (
            <VisibilityIcon
              className="iconhiden"
              onClick={() => {
                setTypepassword("text");
              }}
            />
          ) : (
            <VisibilityOffIcon
              className="iconhiden"
              onClick={() => {
                setTypepassword("password");
              }}
            />
          )}
        </div> */}

      <div className="btnmodal">
        <button
          // href="/works/a"
          onClick={login}
          // onClick={() => {
          //   handleClose();
          // }}
        >
          אישור{" "}
        </button>
      </div>
    </div>
  );
}
