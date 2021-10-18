import React, { useEffect, useState } from "react";
import "./‏‏connectWithUser.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import validator from "validator";

export default function Login() {
  const [messageAccess, setMessageAccess] = useState(false);
  const [messageErr, setMessageErr] = useState(false);
  const [messageErrEmail, setMessageErrEmail] = useState(false);
  const [open, setOpen] = useState(true);
  const [typepassword, setTypepassword] = useState("password");

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

  const handleClose = () => {
    JSON.parse(localStorage.getItem("userName")) === "1" &&
    // process.env.REACT_APP_EMAILDEMO &&
    JSON.parse(localStorage.getItem("password")) === "1" // process.env.REACT_APP_PASSDEMO
      ? access()
      : setMessageErr(true);
  };

  return (
    <div className="login-wrapper">
      <h1>הכנס שם משתמש וסיסמא</h1>
      <div>
        <input
          placeholder="אימייל"
          type="text"
          onChange={(e) => validateEmail(e)}
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
            onChange={(e) =>
              localStorage.setItem("password", JSON.stringify(e.target.value))
            }
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
          onClick={() => {
            handleClose();
          }}
        >
          אישור{" "}
        </button>
      </div>
    </div>
  );
}
