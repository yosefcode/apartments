import "./newsletter.css";
import axios from "axios";
import React from "react";

function Newsletter() {
  let infoNewsletter = {};
  // const [value, setValue] = useState("");

  const addProduct = () => {
    axios
      .post("/api/newsletter/", infoNewsletter)
      .then((res) => console.log("res.data"));
    // setValue("");

    document.getElementById("name").value = "";
    document.getElementById("mail").value = "";
  };

  return (
    <div className="newsletter">
      <form method="GET">
        <h5>
          רוצים להיות ראשונים להתעדכן על הטבות? אפשרויות חדשות לעשות כסף? הכניסו
          את המייל שלכם ואנו נעדכן אתכם ראשונים.
        </h5>
        <input
          id="name"
          className="inputNewsletter"
          type="text"
          onInput={(e) => (infoNewsletter.name = e.target.value)}
          placeholder="שם"
        />
        <input
          id="mail"
          className="inputNewsletter"
          type="text"
          onChange={(e) => (infoNewsletter.email = e.target.value)}
          placeholder="מייל"
        />{" "}
        <button
          className="btnNewsletter"
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

export default Newsletter;
