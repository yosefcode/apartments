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
      <div className="large_screen">
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
      </div>

      <div className="small_screen">
        <div className="login-register">
          <div className="divContainer">
            <ConnectWithGoogle />
          </div>
          <hr className="hr" />
          {!register ? (
            <div className="divContainer">
              <ConnectWithUser />
              <div className="divReset">
                לא רשום?{" "}
                <span
                  className="underline"
                  onClick={() => {
                    setRegister(!register);
                  }}
                >
                  לחץ כאן להרשמה
                </span>
              </div>
            </div>
          ) : (
            <div className="divContainer">
              <Register />
              <div className="divReset">
                {" "}
                רשום כבר?{" "}
                <span
                  className="underline"
                  onClick={() => {
                    setRegister(!register);
                  }}
                >
                  לחץ כאן לכניסה
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
