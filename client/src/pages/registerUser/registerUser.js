import MyDetails from "../../components/myDetails/myDetails";
import { AppContext } from "../../variable-Context";
import React, { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Link } from "react-router-dom";

function RegisterUser() {
  const { uidFirebase, registeredUser } = useContext(AppContext);

  useEffect(() => {
    if (registeredUser === true) {
      window.location.href = "/user/" + uidFirebase;
    }
  }, [registeredUser]);

  return (
    <div className="container_responsive">
      <MyDetails
        titleHeader={
          "מס' פרטים ואתה יכול להתחיל לפרסם ולהנות מהמבצעים שיש לנו להציע...."
        }
      />
    </div>
  );
}

export default RegisterUser;
