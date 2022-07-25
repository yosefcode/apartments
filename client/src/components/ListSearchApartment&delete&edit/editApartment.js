import React, { useState, useContext } from "react";
import AddEditApartment from "../Add_&_Edit_Apartment/Add_&_Edit_Apartment";

const EditApartment = ({ itemForEdit, setIsOpenForEdit }) => {
  return (
    <div>
      <AddEditApartment
        itemForEdit={itemForEdit}
        setIsOpenForEdit={setIsOpenForEdit}
      />
    </div>
  );
};
export default EditApartment;
