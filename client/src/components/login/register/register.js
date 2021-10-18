import React, { useEffect, useState } from "react";
import "./register.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const email = "aaasssddd@gmail.com";
  const password = "a4s7g8h9";

  const auth = getAuth();

  const login = () => {
    console.log("ssss");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div className="">
      הרשמה
      <button onClick={login}>aaaaaaa</button>
    </div>
  );
}
