import ListRentApartment from "../../components/ListRentApartment&delete&edit/ListRentApartment";
import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../variable-Context";
import Baner from "../../components/baner";
function MyApartments() {
  const { uidFirebase } = useContext(AppContext);
  return (
    <div className="myApartment">
      <Baner content={"מודעות השכרה"} />

      <ListRentApartment url={`/api/myApartments/${uidFirebase}`} />

      {/* <Baner content={"מודעות חיפוש"} />

      <ListApartments url={`/api/mylistPostSearch/${uidFirebase}`} /> */}
    </div>
  );
}

export default MyApartments;
