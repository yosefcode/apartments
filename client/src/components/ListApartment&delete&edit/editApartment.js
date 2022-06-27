import React, { useState, useContext } from "react";
import AddEditApartment from "../Add_&_Edit_Apartment/Add_&_Edit_Apartment";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const EditApartment = ({ itemForEdit, setIsOpenModal }) => {
  console.log(itemForEdit);

  return (
    <div>
      <div
        onClick={() => {
          setIsOpenModal(false);
        }}
      >
        <ExpandMoreIcon
          sx={{
            fontSize: "4rem",
            marginInline: "10px",
            color: "black",
            transform: "rotate(270deg)",
            cursor: "pointer",
          }}
        />
      </div>
      <AddEditApartment
        itemForEdit={itemForEdit}
        setIsOpenModal={setIsOpenModal}
      />
    </div>
  );
};
export default EditApartment;
