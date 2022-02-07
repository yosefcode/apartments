import "./addApartment.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import DetailsApartment from "./detailsApartment/detailsApartment";
import Contact from "./contact/contact";
import Images from "./images/images";
import SpecialApartment from "./‏specialApartment/‏specialApartment";

function AddApartment({ id }) {
  const [apartment, setApartment] = useState([]);
  const [valueCity, setValueCity] = useState("");
  const [valueStreet, setValueStreet] = useState("");

  const addApartment = () => {
    axios.post("/api/addApartment/", apartment).then((res) => {});
  };

  const onchange = (e) => {
    setApartment({
      ...apartment,
      uidFirebase: id,
      show: true,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    setApartment({
      ...apartment,
      city: valueCity,
      street: valueStreet,
    });
  }, [valueCity, valueStreet]);

  localStorage.setItem(
    `addApartment`,
    JSON.stringify([
      // ...(JSON.parse(localStorage.getItem(`favorite`)) || []),
      apartment,
    ])
  );

  // console.log(apartment);

  return (
    <div className="addApartment">
      <div class="tabs">
        <div class="tab">
          <input type="checkbox" id="chck1" className="input-checkbox" />
          <label class="tab-label" for="chck1">
            פרטי הדירה{" "}
          </label>
          <div class="tab-content">
            <DetailsApartment
              id={id}
              apartment={apartment}
              setApartment={setApartment}
              onchange={onchange}
              setValueCity={setValueCity}
              setValueStreet={setValueStreet}
              valueStreet={valueStreet}
              valueCity={valueCity}
            />{" "}
          </div>
        </div>

        <div class="tab">
          <input type="checkbox" id="chck2" className="input-checkbox" />
          <label class="tab-label" for="chck2">
            תיאור{" "}
          </label>
          <div class="tab-content">
            <SpecialApartment
              id={id}
              apartment={apartment}
              setApartment={setApartment}
              onchange={onchange}
            />{" "}
          </div>
        </div>

        <div class="tab">
          <input type="checkbox" id="chck3" className="input-checkbox" />
          <label class="tab-label" for="chck3">
            הוספת תמונות{" "}
          </label>
          <div class="tab-content">
            <Images
              id={id}
              apartment={apartment}
              setApartment={setApartment}
              onchange={onchange}
            />{" "}
          </div>
        </div>

        <div class="tab">
          <input type="checkbox" id="chck4" className="input-checkbox" />
          <label class="tab-label" for="chck4">
            פרטי איש קשר{" "}
          </label>
          <div class="tab-content">
            <Contact
              id={id}
              apartment={apartment}
              setApartment={setApartment}
              onchange={onchange}
            />{" "}
          </div>
        </div>

        <div class="tab">
          <input type="checkbox" id="chck5" className="input-checkbox" />
          <label class="tab-label" for="chck5">
            אישור וסיום{" "}
          </label>
          <div class="tab-content">
            <button onClick={addApartment}>addApartment</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddApartment;
