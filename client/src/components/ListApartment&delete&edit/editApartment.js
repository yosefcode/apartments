import React, { useState, useContext } from "react";
import AddEditApartment from "../Add_&_Edit_Apartment/Add_&_Edit_Apartment";

const EditApartment = ({
  id,
  show,
  render,
  setRender,
  itemForEdit,
  setIsOpenModal,
}) => {
  console.log(itemForEdit);

  return (
    <div>
      <button
        onClick={() => {
          setIsOpenModal(false);
        }}
      >
        יציאה
      </button>
      <AddEditApartment
        itemForEdit={itemForEdit}
        setIsOpenModal={setIsOpenModal}
      />
    </div>
  );
};
export default EditApartment;
