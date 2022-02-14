import React, { useEffect, useState } from "react";
import "./login.css";
import ConnectWithGoogle from "./connectWithGoogle/connectWithGoogle";
import ConnectWithUser from "./‏‏connectWithUser/‏‏connectWithUser";
import Register from "./register/register";

export default function Login() {
  const [register, setRegister] = useState(false);

  return (
    <div className="login">
      <div className="headerLogin">כניסה - איזור אישי</div>
      {document.documentElement.clientWidth > 600 ? (
        <div className="login-register">
          <div className="divContainer">
            <ConnectWithGoogle />
          </div>
          <div className="divContainer">
            <ConnectWithUser />
          </div>
          <div className="divContainer">
            <Register />
          </div>
        </div>
      ) : (
        <div className="login-register">
          <div className="divContainer">
            <ConnectWithGoogle />
          </div>

          {!register ? (
            <div className="divContainer">
              <ConnectWithUser />
              לא רשום?
              <span
                className="divReset"
                onClick={() => {
                  setRegister(!register);
                }}
              >
                לחץ כאן להרשמה
              </span>
            </div>
          ) : (
            <div className="divContainer">
              <Register />
              רשום כבר?
              <span
                className="divReset"
                onClick={() => {
                  setRegister(!register);
                }}
              >
                לחץ כאן לכניסה
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
