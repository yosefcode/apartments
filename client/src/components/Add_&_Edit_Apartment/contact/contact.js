import "./contact.css";
import { parsePhoneNumber } from "libphonenumber-js";
import { Input } from "../../Input/Input";

function Contact({
  setApartment,
  apartment,
  formik,
  onchange,
  apiUserForFirebase,
}) {
  return (
    <div className="div-all-input">
      <Input
        label={"שם איש הקשר"}
        name={"name"}
        onChange={onchange}
        formikErr={formik.errors.name}
        width={"30%"}
      />

      <Input
        label={"מייל"}
        name={"mail"}
        onChange={onchange}
        formikErr={formik.errors.mail}
        width={"30%"}
      />

      <Input
        label={"טלפון"}
        name={"phone"}
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
