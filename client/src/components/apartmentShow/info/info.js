import "./info.css";
import "react-gallery-carousel/dist/index.css";
import Contact from "./contact/contact";

function Info({ apartmentShow }) {
  return apartmentShow.map((list) => (
    <div className="information">
      <div className="headerInfo headerInfo1">מידע</div>
      <div className="info">
        <h2>
          {" "}
          {list.area}, {list.city}.
        </h2>
        <h3>
          {" "}
          {list.rooms} חדרים, עד {list.beds} מיטות.
        </h3>
        <h4> מחיר: החל מ{list.price} ש"ח ללילה.</h4>
        <h3>{list.phone}</h3>
        <Contact apartmentShow={apartmentShow} />
        <h4>{list.long}</h4>
      </div>
    </div>
  ));
}

export default Info;
