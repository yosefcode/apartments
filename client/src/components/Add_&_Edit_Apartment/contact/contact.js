import "./contact.css";
import { parsePhoneNumber } from "libphonenumber-js";
import { Input } from "../../Input/Input";
import React, { useContext } from "react";
import { AppContext } from "../../../variable-Context";

function Contact({ setApartment, apartment, formik, onchange, itemForEdit }) {
  const { userConnect } = useContext(AppContext);

  return (
    <div className="div-all-input">
      <Input
        label={"שם איש הקשר"}
        name={"name"}
        defaultValue={itemForEdit ? itemForEdit.name : userConnect?.nameUser}
        onChange={onchange}
        formikErr={formik.errors.name}
        width={"30%"}
      />

      <Input
        label={"מייל"}
        name={"mail"}
        defaultValue={itemForEdit ? itemForEdit.mail : userConnect?.mailUser}
        onChange={onchange}
        formikErr={formik.errors.mail}
        width={"30%"}
      />

      <Input
        label={"טלפון"}
        name={"phone"}
        defaultValue={itemForEdit ? itemForEdit.phone : userConnect?.phoneUser}
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
        width={"30%"}
      />
    </div>
  );
}

export default Contact;
