import "./connectWithGoogle.css";
import { Person } from "@mui/icons-material/";
import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";

const ConnectWithGoogle = () => {
  const provider = new GoogleAuthProvider();

  const auth = getAuth();

  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        window.location.href = "/login/" + user.uid;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  // login();
  return (
    <div className="connectWithGoogle">
      <div className="a">
        התחבר דרך גוגל
        <Person
          onClick={login}
          style={{
            fontSize: "4vw",
            color: "blue",
            background: "white",
            borderRadius: "50%",
          }}
        />
      </div>
    </div>
  );
};

export default ConnectWithGoogle;
