import ListApartments from "../../components/ListApartment&delete&edit/ListApartment&delete&edit";
import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../variable-Context";

function MyApartments() {
  const { uidFirebase } = useContext(AppContext);
  return (
    <div className="myApartment">
      <ListApartments url={`/api/myApartments/${uidFirebase}`} />
    </div>
  );
}

export default MyApartments;
