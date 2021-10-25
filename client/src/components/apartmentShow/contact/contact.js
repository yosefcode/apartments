import "./contact.css";
import React, { useState, useEffect } from "react";
import AddToFavorite from "../../favorite/addToFavorite/addToFavorite";
import {
  AlternateEmail,
  Language,
  Message,
  Call,
  WhatsApp,
} from "@mui/icons-material";

function Contact({ apartmentShow, executeScroll }) {
  return apartmentShow.map((apartment) => (
    <div className="contact" key={apartment._id}>
      <Call
        style={{
          fontSize: "3vw @media only screen and (max-width: 999px)",
          color: "blue",
        }}
        className="phone"
        onClick={() => {
          window.open(`tel:${apartment.phone}`);
        }}
      />

      <WhatsApp
        style={{
          fontSize: "3vw @media only screen and (max-width: 999px)",
          color: "green",
        }}
        className="what"
        onClick={() => {
          window.open(
            `https://wa.me/972${apartment.phone.replaceAll("-", "")}`
          );
        }}
      />

      <Message
        className="message"
        style={{ fontSize: "3vw @media only screen and (max-width: 999px)" }}
        onClick={executeScroll}
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
