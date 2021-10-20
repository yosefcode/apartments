import React, { useEffect, useState } from "react";
import "./login.css";
import ConnectWithGoogle from "./connectWithGoogle/connectWithGoogle";
import ConnectWithUser from "./‏‏connectWithUser/‏‏connectWithUser";
import Register from "./register/register";

export default function Login() {
  return (
    <div className="login">
      <div className="headerLogin">כניסה - איזור אישי</div>
      <div className="login-register">
        {/* התחברות לאיזור האישי */}
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
  );
}
