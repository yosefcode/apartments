import React, { useEffect, useState } from "react";
import "./login.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import validator from "validator";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 360,
  },
  margin: {
    margin: theme.spacing(5),
    // width: "100%",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    minWidth: 600,
    borderRadius: 50,
    backgroundColor: "#e0ccff",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  btn: {
    width: "50%",
    // margin: theme.spacing(2),
    // marginLeft: 30,
  },
}));

export default function Login() {
  const [messageAccess, setMessageAccess] = useState(false);
  const [messageErr, setMessageErr] = useState(false);
  const [messageErrEmail, setMessageErrEmail] = useState(false);
  const [open, setOpen] = useState(true);
  const [typepassword, setTypepassword] = useState("password");
  const classes = useStyles();

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
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      // onClose={handleClose}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <div className="modallogin">
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="login-wrapper">
              <h1>Please Log In</h1>
              <div>
                <input
                  placeholder="Email"
                  type="text"
                  onChange={(e) => validateEmail(e)}
                />

                {messageErrEmail && (
                  <div className="msgerr">
                    Please enter a valid email address{" "}
                  </div>
                )}
              </div>
              <div className="divpassword">
                <div className="divinputpassword">
                  <input
                    placeholder="Password"
                    type={typepassword}
                    onChange={(e) =>
                      localStorage.setItem(
                        "password",
                        JSON.stringify(e.target.value)
                      )
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
                <div className="msgerr1">The user or password is incorrect</div>
              )}

              {messageAccess && (
                <div className="msgerr1"> You have successfully connected</div>
              )}

              <div className="btnmodal">
                <Button
                  variant="contained"
                  className={classes.btn}
                  // href="/works/a"
                  onClick={() => {
                    handleClose();
                  }}
                >
                  login{" "}
                </Button>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </Modal>
  );
}
