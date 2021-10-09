import "./sendMessage.css";
import axios from "axios";
import { useState } from "react";

function SendMessage({ apartmentShow }) {
  const nameApartment = apartmentShow.map((mail) => mail.name);
  const mail = apartmentShow.map((mail) => mail.mail);

  // let message = { mail: mail[0], nameApartment: nameApartment[0] };
  let message = {
    mail: "michal0361@gmail.com",
    nameApartment: nameApartment[0],
  };

  const [modal, setModal] = useState("modal display-none");
  const [msgmodal, setMsgmodal] = useState();

  const sendMessage = () => {
    !message.message ? nomsg() : yesmsg();
  };

  const nomsg = () => {
    setMsgmodal("מה אני אשלח? לא כתבת כלום  \ud83d\ude14");
    setModal("modal display-block");
    setTimeout(function () {
      setModal("modal display-none");
    }, 2000);
  };

  const [name, setName] = useState("");
  console.log(name);
  const yesmsg = () => {
    axios
      .post("/api/sendMessageForApartment/", message)
      .then((res) => console.log("res.data"));
    setMsgmodal("ההודעה נשלחה בהצלחה  \ud83d\ude00");
    setModal("modal display-block");
    // console.log(message);
    // setName({ [e.target.name]: e.target.value });
    document.getElementById("textarea").innerHTML = "";
    document.getElementById("in").value = "";
    document.getElementById("in1").value = "";
    setTimeout(function () {
      setModal("modal display-none");
      // setModalmessage("displaynone");
    }, 2000);
  };

  return apartmentShow.map((list) => (
    <div className="sendMessage">
      {" "}
      <div className="headerSendMessage headerSendMessage1">
        שלח הודעה לבעל הדירה
      </div>
      {/* <form onSubmit={handleSubmit}> */}
      <div className="allSendMessage">
        <div className="info">
          <input
            id="in"
            placeholder="שם"
            // onChange={yesmsg}
            onInput={(e) => (message.name = e.target.value)}
            name="name"
            // value="ffff"
          ></input>
          <input
            id="in1"
            placeholder="טלפון"
            onInput={(e) => (message.phone = e.target.value)}
          ></input>

          <div className={"message"}>
            <div
              onInput={(e) => (message.message = e.currentTarget.textContent)}
              id="textarea"
              className="textarea"
              contentEditable
              placeholder=" אשמח לשמוע מכם ... &#x1F60A;"
            ></div>

            <div
              className="btnmessage"
              type="submit"
              onClick={() => {
                sendMessage();
                // console.log(message);
              }}
            >
              שלח
            </div>

            <div className={modal}>{msgmodal}</div>

            <div style={{ height: "70px" }}></div>
          </div>
        </div>
      </div>
      {/* </form> */}
    </div>
  ));
}

export default SendMessage;
