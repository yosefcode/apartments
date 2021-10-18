import React, { useEffect, useState } from "react";
import "./login.css";
import ConnectWithGoogle from "./connectWithGoogle/connectWithGoogle";
import ConnectWithUser from "./‏‏connectWithUser/‏‏connectWithUser";
import Register from "./register/register";

export default function Login() {
  return (
    <div className="login">
      {/* התחברות לאיזור האישי */}
      <div>
        <ConnectWithGoogle />
      </div>
      <div>
        <ConnectWithUser />
      </div>
      <div>
        <Register />
      </div>
    </div>
  );
}
