import "./addApartment.css";
import axios from "axios";
import { useState } from "react";

function SendMessage({ apartmentShow }) {
  // const nameApartment = apartmentShow.map((mail) => mail.name);
  // const mail = apartmentShow.map((mail) => mail.mail);
  // // const mail = ["michal0361@gmail.com"];
  // // const mail = [
  // //   "A0575172432@gmail.com",
  // //   "michal0361@gmail.com",
  // //   "yosef9987@walla.com",
  // // ];

  // const [message, setMessage] = useState({});

  // const onchange = (e) =>
  //   setMessage({
  //     ...message,
  //     mail: mail[0],
  //     nameApartment: nameApartment[0],
  //     [e.target.name]: e.target.value,
  //   });

  return (
    <div className="addApartment">
      <button>addApartment</button>
    </div>
  );
}

export default SendMessage;
