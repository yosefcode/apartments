import "./sendMessage.css";
import axios from "axios";
import { useState } from "react";

function SendMessage({ apartmentShow }) {
  const nameApartment = apartmentShow.map((mail) => mail.name);
  const mail = apartmentShow.map((mail) => mail.mail);
  // const mail = ["michal0361@gmail.com"];
  // const mail = [
  //   "A0575172432@gmail.com",
  //   "michal0361@gmail.com",
  //   "yosef9987@walla.com",
  // ];

  const [message, setMessage] = useState({});

  const onchange = (e) =>
    setMessage({
      ...message,
      mail: mail,
      nameApartment: nameApartment[0],
      [e.target.name]: e.target.value,
    });

  const [modal, setModal] = useState("display-none");
  const [msgmodal, setMsgmodal] = useState();

  const sendMessage = () => {
    message.message && message.phone ? yesmsg() : nomsg();
  };

  const nomsg = () => {
    setMsgmodal(
      !message.message && !message.phone && !message.name
        ? "מה אני אשלח? לא מילאת כלום \ud83d\ude14"
        : !message.message && !message.phone
        ? "שם זה נחמד אבל איך נדע מה אתה מעוניין לדעת?"
        : !message.phone
        ? "חסר פרטים ליצירת קשר איתך. איך נחזור אליך עם תשובה?"
        : !message.message
        ? "נשמח לדעת מה אתה רוצה לברר מבעלי הדירה"
        : ""
    );

    setModal("modal");
    setTimeout(function () {
      setModal("display-none");
    }, 4000);
  };

  const yesmsg = () => {
    axios
      .post("/api/sendMessageForApartment/", message)
      .then((res) => console.log("res.data"));
    setMsgmodal("ההודעה נשלחה בהצלחה  \ud83d\ude00");
    setModal("modal");
    setMessage({});
    document.getElementById("message").innerHTML = "";
    document.getElementById("inputName").value = "";
    document.getElementById("inputPhone").value = "";
    setTimeout(function () {
      setModal("display-none");
    }, 4000);
  };

  return apartmentShow.map((list) => (
    <div className="sendMessage">
      {" "}
      <div className="headerSendMessage headerSendMessage1">
        שלח הודעה לבעל הדירה
      </div>
      <div className="allSendMessage">
        <input
          type="text"
          id="inputName"
          placeholder="שם"
          name="name"
          onChange={onchange}
        />

        <input
          type="text"
          id="inputPhone"
          placeholder="טלפון / מייל"
          onChange={onchange}
          name="phone"
        ></input>

        <div
          onInput={(e) => (message.message = e.currentTarget.textContent)}
          id="message"
          contentEditable
          placeholder="בעלי הדירה ישמחו לשמוע מכם ... &#x1F60A;"
        ></div>

        <button
          className="btnmessage btnmessage1"
          onClick={() => {
            sendMessage();
          }}
        >
          שלח
        </button>

        <div className={modal}>{msgmodal}</div>
      </div>
    </div>
  ));
}

export default SendMessage;
