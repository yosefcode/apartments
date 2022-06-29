import React, { useEffect, useState, useContext } from "react";
import "./login.css";
import ConnectWithGoogle from "./connectWithGoogle/connectWithGoogle";
import ConnectWithUser from "./‏‏connectWithUser/‏‏connectWithUser";
import Register from "./register/register";
import { PostToServerLoading } from "../../components/getData";
import { AppContext } from "../../variable-Context";

export default function Login() {
  const { uidFirebase, detailsUsers, setDetailsUsers, setUidFirebase } =
    useContext(AppContext);
  const [register, setRegister] = useState(false);
  const [connectUserForFirebase, setConnectUserForFirebase] = useState(false);
  useEffect(() => {
    setUidFirebase("");
  }, []);

  return (
    <div className="login">
      {!connectUserForFirebase ? (
        <div>
          <div className="headerLogin">כניסה - איזור אישי</div>
          <div className="large_screen">
            <div className="login-register">
              <div className="divContainer">
                <ConnectWithGoogle
                  setConnectUserForFirebase={setConnectUserForFirebase}
                />
              </div>
              <div className="divContainer">
                <ConnectWithUser
                  setConnectUserForFirebase={setConnectUserForFirebase}
                />
              </div>
              <div className="divContainer">
                <Register
                  setConnectUserForFirebase={setConnectUserForFirebase}
                />
              </div>
            </div>
          </div>

          <div className="small_screen">
            <div className="login-register">
              <div className="divContainer">
                <ConnectWithGoogle
                  setConnectUserForFirebase={setConnectUserForFirebase}
                />
              </div>
              <hr className="hr" />
              {!register ? (
                <div className="divContainer">
                  <ConnectWithUser
                    setConnectUserForFirebase={setConnectUserForFirebase}
                  />
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
                  <Register
                    setConnectUserForFirebase={setConnectUserForFirebase}
                  />
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
      ) : (
        <PostToServerLoading
          route={`/api/userConnected/${uidFirebase}`}
          data={setDetailsUsers}
          content={
            detailsUsers?.uidFirebase === uidFirebase
              ? (window.location.href = "/user/" + uidFirebase)
              : (window.location.href = "/register/")
          }
        />
      )}
    </div>
  );
}
