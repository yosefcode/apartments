import "./connectWithGoogle.css";
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
      // signInWithRedirect(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        // console.log(result);
        window.location.href = "/login/" + user.uid;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div className="connectWithGoogle">
      <div className="a">
        <p>
          התחברו דרך חשבונכם האישי בגוגל <br />
          בצורה מאובטחת וללא צורך בהרשמה.
        </p>
      </div>

      <div className="google-btn" onClick={login}>
        <div className="google-icon-wrapper">
          <img
            className="google-icon"
            src="https://img.icons8.com/color/50/000000/google-logo.png"
            alt=""
          />
        </div>
        <span className="btn-text">
          <b>Sign in with Google</b>
        </span>
      </div>
    </div>
  );
};

export default ConnectWithGoogle;
