import "./contact.css";
import React, { useState, useEffect } from "react";
import what from "./img/WhatsApp.png";
import phone from "./img/phone.png";
import mail from "./img/mail.png";
import MessageIcon from "@material-ui/icons/Message";

function Contact({ apartmentShow }) {
  return apartmentShow.map((apartment) => (
    <div className="divContact" key={apartment._id}>
      <img
        className="phone"
        src={phone}
        alt="תמונה חסרה"
        onClick={() => {
          window.open(`tel:${apartment.phone}`);
        }}
      />

      <img
        className="what"
        src={what}
        alt="תמונה חסרה"
        onClick={() => {
          window.open(`https://wa.me/972${apartment.phone.replace(/-/, "")}`);
          console.log(apartment.phone.replace(/-/, ""));
        }}
      />

      <a
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${apartment.phone}@gmail.com`}
        target="_blank"
        rel="noreferrer"
      >
        <img className="mail" src={mail} alt="תמונה חסרה" />
      </a>

      <MessageIcon
        className="message"
        style={{ fontSize: "3vw @media only screen and (max-width: 999px)" }}
        onClick={() => {
          console.log("aa");
        }}
      />
    </div>
  ));
}

export default Contact;
