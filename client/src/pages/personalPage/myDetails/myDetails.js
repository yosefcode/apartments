import "./myDetails.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Contact from "./contact/contact";
import * as Yup from "yup";
import { useFormik } from "formik";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { SpinningCircles } from "react-loading-icons";
import CancelIcon from "@mui/icons-material/Cancel";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function DetailsUser({ id, apiUserForFirebase }) {
  const [isLoading, setIsLoading] = useState(false);
  const [msgmodal, setMsgmodal] = useState(false);
  const [textMsgmodal, setTextMsgmodal] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [detailsUser, setDetailsUser] = useState({
    nameUser: apiUserForFirebase?.displayName,
    mailUser: apiUserForFirebase?.email,
    phoneUser: "",
    isAgree: false,
  });

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      setMsgmodal(false);
    }

    return (
      <div className="timer">
        <CancelIcon
          style={{ fontSize: 28 }}
          onClick={() => {
            setMsgmodal(false);
            setIsLoading(false);
          }}
        />
      </div>
    );
  };

  const formik = useFormik({
    initialValues: detailsUser,
    enableReinitialize: true,
    validationSchema: Yup.object({
      nameUser: Yup.string().min(2, "מינימום 2 תווים").required("* שדה חובה"),
      mailUser: Yup.string().email("לא תקין").required("* שדה חובה"),
      phoneUser: Yup.string()
        .required("* שדה חובה")
        .test("isValidNumber", "מס' אינו תקין", (phone) => {
          const parsedNumber =
            !!phone && parsePhoneNumberFromString(phone, "IL");
          return parsedNumber && parsedNumber.isValid() ? true : false;
        }),
      isAgree: Yup.boolean()
        .oneOf([true], "* חובה לאשר")
        .required("* חובה לאשר"),
    }),
    onSubmit: (values) => {
      sendDetailsUser();
    },
  });

  const sendDetailsUser = async () => {
    console.log(detailsUser);
    // setIsLoading(true);
    axios.post("/api/addUser/", detailsUser).then((res) => {
      console.log(res);
      // if (res.status !== 200 || !res.data.uidFirebase) {
      //   setMsgmodal(true);
      //   setIsLoading(false);
      // } else {
      //   setTextMsgmodal(true);
      //   setMsgmodal(true);
      //   setIsLoading(false);
      // }
    });
  };

  const onchange = (e) => {
    setDetailsUser({
      ...detailsUser,
      uidFirebase: id,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="my_details">
      {!isLoading && !msgmodal ? (
        <form onSubmit={formik.handleSubmit}>
          <div class="tab-content">
            <Contact
              detailsUser={detailsUser}
              setDetailsUser={setDetailsUser}
              formik={formik}
              onchange={onchange}
              apiUserForFirebase={apiUserForFirebase}
            />{" "}
          </div>

          <div className="div_checkbox" style={{ marginRight: "5rem" }}>
            <input
              type="checkbox"
              name="isAgree"
              onChange={(e) => {
                setDetailsUser({
                  ...detailsUser,
                  [e.target.name]: e.target.checked,
                });
              }}
            />
            <label>
              מאשר את{" "}
              <div
                className="link_PrivacyPolicy"
                onClick={() => {
                  setMsgmodal(true);
                  setPrivacyPolicy(true);
                }}
              >
                {" "}
                תקנון האתר
              </div>{" "}
            </label>
          </div>
          <div className="div_err_addApartment" style={{ marginRight: "5rem" }}>
            {formik.errors.isAgree}
          </div>

          <div class="tab-content">
            <button type="submit" className="btn_send">
              אישור{" "}
            </button>
          </div>
        </form>
      ) : privacyPolicy ? (
        <div>תנאי האתר</div>
      ) : isLoading ? (
        <div className="loading">
          <SpinningCircles
            height="4em"
            width="4em"
            fill="rgb(28, 2, 99)"
            stroke="rgb(28, 2, 99)"
            strokeOpacity={1}
            fillOpacity={1}
            speed={1}
          />
        </div>
      ) : msgmodal ? (
        <div className="msgmodal">
          <div className="timer-wrapper">
            <CountdownCircleTimer
              isPlaying
              duration={10}
              colors={[["#8a8a8a"]]}
              onComplete={() => [true, 1000]}
              size={32}
              strokeWidth={6}
            >
              {renderTime}
            </CountdownCircleTimer>
          </div>
          <div className="text-msgmodal">
            {textMsgmodal ? (
              <div>פרטי המשתמש נשמרו בהצלחה </div>
            ) : (
              <div>רישום משתמש נכשל </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default DetailsUser;
