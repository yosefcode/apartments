import React, { useEffect, useState } from "react";
import "./‏‏connectWithUser.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import validator from "validator";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function ConnectWithUser() {
  const [messageAccess, setMessageAccess] = useState(false);
  const [messageErr, setMessageErr] = useState(false);
  const [messageErrEmail, setMessageErrEmail] = useState(false);
  const [open, setOpen] = useState(true);
  const [typepassword, setTypepassword] = useState("password");
  const [email, setname] = useState("");
  // const [password, setpas] = useState("");
  const personalInformation = {};

  const auth = getAuth();
  const asd = () => {
    console.log(personalInformation);

    signInWithEmailAndPassword(
      auth,
      personalInformation.email,
      personalInformation.password
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const validateEmail = (e) => {
    var email = e.target.value;
    localStorage.setItem("userName", JSON.stringify(e.target.value));

    if (validator.isEmail(email)) {
      setMessageErrEmail(false);
    } else {
      setMessageErrEmail(true);
    }
  };

  const access = () => {
    setMessageErr(false);
    setMessageAccess(true);
    setTimeout(() => {
      window.top.location.href = "/message/";
    }, 2000);
  };

  return (
    <div className="login-wrapper">
      <h1>הכנס שם משתמש וסיסמא</h1>
      <div>
        <input
          placeholder="אימייל"
          type="text"
          // onChange={(e) => validateEmail(e)}
          onChange={(e) => {
            personalInformation.email = e.target.value;
          }}
        />

        {messageErrEmail && (
          <div className="msgerr">כתובת האימייל אינה תקנית </div>
        )}
      </div>
      <div className="divpassword">
        <div className="divinputpassword">
          <input
            placeholder="סיסמא"
            type={typepassword}
            // onChange={(e) =>
            //   localStorage.setItem("password", JSON.stringify(e.target.value))
            // }
            onChange={(e) => {
              personalInformation.password = e.target.value;
            }}
          />
        </div>

        <div className="diviconhiden">
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
        </div>
      </div>

      {messageErr && (
        <div className="msgerr1">שם המשתמש או הסיסמא אינם נכונים</div>
      )}

      {messageAccess && <div className="msgerr1">התחברת בהצלחה!</div>}

      <div className="btnmodal">
        <button
          // href="/works/a"
          onClick={asd}
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
