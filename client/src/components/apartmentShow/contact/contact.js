import "./contact.css";
import React, { useState, useEffect } from "react";
import what from "./img/WhatsApp.png";
import phone from "./img/phone.png";
import AddToFavorite from "../../favorite/addToFavorite/addToFavorite";
import { AlternateEmail, Language, Message } from "@mui/icons-material";

function Contact({ apartmentShow }) {
  return apartmentShow.map((apartment) => (
    <div className="contact" key={apartment._id}>
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
        }}
      />

      <Message
        className="message"
        style={{ fontSize: "3vw @media only screen and (max-width: 999px)" }}
        onClick={() => {
          console.log("Message");
        }}
      />

      <a
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${apartment.mail}`}
        target="_blank"
        rel="noreferrer"
      >
        <AlternateEmail
          className="message"
          style={{
            fontSize: "3vw @media only screen and (max-width: 999px)",
            color: "red",
          }}
        />
      </a>
      <a href={`/`} target="_blank" rel="noreferrer">
        <Language
          className="message"
          style={{
            fontSize: "3vw @media only screen and (max-width: 999px)",
            color: "black",
          }}
          onClick={() => {
            console.log("link-Web");
          }}
        />
      </a>
      <AddToFavorite apartmentForFavorite={apartment} />
    </div>
  ));
}

export default Contact;
