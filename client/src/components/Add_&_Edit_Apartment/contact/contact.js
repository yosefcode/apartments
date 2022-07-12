import "./contact.css";
import { parsePhoneNumber } from "libphonenumber-js";
import { Input } from "../../Input_select_button/Input_select_button";
import React, { useContext } from "react";
import { AppContext } from "../../../variable-Context";

function Contact({ setApartment, apartment, formik, onchange, itemForEdit }) {
  const { detailsUsers } = useContext(AppContext);

  return (
    <div className="div-all-input div_contact">
      <Input
        label={"שם איש הקשר"}
        name={"name"}
        defaultValue={itemForEdit ? itemForEdit.name : detailsUsers?.nameUser}
        onChange={onchange}
        formikErr={formik.errors.name}
        width={"90%"}
      />

      <Input
        label={"מייל"}
        name={"mail"}
        defaultValue={itemForEdit ? itemForEdit.mail : detailsUsers?.mailUser}
        onChange={onchange}
        formikErr={formik.errors.mail}
        width={"90%"}
      />

      <Input
        label={"טלפון"}
        name={"phone"}
        defaultValue={itemForEdit ? itemForEdit.phone : detailsUsers?.phoneUser}
        onChange={(e) => {
          setApartment({
            ...apartment,
            [e.target.name]:
              e.target.value.length > 1
                ? parsePhoneNumber(e.target.value, "IL").formatNational()
                : "0",
          });
        }}
        formikErr={formik.errors.phone}
        width={"90%"}
      />
    </div>
  );
}

export default Contact;
