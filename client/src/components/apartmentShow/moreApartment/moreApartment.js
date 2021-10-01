// import "./moreApartment.css";
// import React, { useState, useEffect } from "react";
// import Apartment from "../../apartment/apartment";

// const MoreApartment = ({ apartmentShow, setFilter, filter }) => {
//   const area = { area: apartmentShow.map((area) => area.area) };

//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   useEffect(async () => {
//     await setFilter({ area: ["צפון"] });
//   }, [setFilter]);
//   console.log("a", filter);
//   console.log("b", area);

//   return (
//     <div className="divMore">
//       <div className="headerMore headerMore1">דירות באיזור</div>
//       <div className="more">{filter && <Apartment />} </div>
//     </div>
//   );
// };

// export default MoreApartment;

import "./moreApartment.css";
import React, { useState, useEffect } from "react";
import Apartment from "../../apartment/apartment";
import axios from "axios";
import { Link } from "react-router-dom";

const MoreApartment = ({ apartmentShow, setFilter, filter }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const area = { area: apartmentShow.map((area) => area.area) };

  let [list, setList] = useState([]);

  useEffect(() => {
    axios.post(`/api/list/filter/`, area).then((res) => {
      setList(res.data);
    });
  }, [area]);

  return (
    <div className="divMore">
      <div className="headerMore headerMore1">דירות באיזור</div>
      <div className="more">
        <div>
          {" "}
          {list.map((list) => (
            <Link to={"/" + list._id} target="_blank">
              <div className="box" key={list._id}>
                <div>
                  <img className="imgaa" src={list.firstImage} alt=""></img>
                </div>
                <div>
                  דירת {list.rooms} חדרים - ב{list.city}
                  <br />
                  עד {list.beds} מיטות
                  <br />
                  {list.short}
                </div>
                <div>
                  החל מ{list.price} ש"ח ללילה
                  <br />
                  {list.phone}
                </div>
              </div>
            </Link>
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default MoreApartment;
