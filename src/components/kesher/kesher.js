import "./kesher.css";
import axios from "axios";
import React from "react";

function Kesher() {
  let product = {};

  const addProduct = () => {
    axios
      .post("/api/send-mail/", product)
      .then((res) => console.log("res.data"));

    document.getElementById("name").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("message").value = "";
  };

  return (
    <div className="kesher">
      <form method="GET">
        <h5>
          רוצים להיות ראשונים להתעדכן על הטבות? אפשרויות חדשות לעשות כסף? הכניסו
          את המייל שלכם ואנו נעדכן אתכם ראשונים.
        </h5>
        <input
          id="name"
          className="inputKesher"
          type="text"
          onInput={(e) => (product.name = e.target.value)}
          placeholder="שם"
        />
        <input
          id="mail"
          className="inputKesher"
          type="text"
          onChange={(e) => (product.email = e.target.value)}
          placeholder="מייל"
        />{" "}
        <textarea
          id="message"
          className="textareaKesher"
          type="text"
          onChange={(e) => (product.message = e.target.value)}
          placeholder="שתף אותנו..."
        />{" "}
        <button
          className="btnKesher"
          type="reset"
          onClick={() => {
            addProduct();
          }}
        >
          שלח
        </button>
      </form>
    </div>
  );
}

export default Kesher;
