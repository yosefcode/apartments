import React, { useState, useContext } from "react";
import AddEditSearchApartment from "../SearchApartment/SearchApartment";

const EditApartment = ({ itemForEdit, setIsOpenForEdit }) => {
  return (
    <div>
      <AddEditSearchApartment
        itemForEdit={itemForEdit}
        setIsOpenForEdit={setIsOpenForEdit}
      />
    </div>
  );
};
export default EditApartment;
