import "./info.css";
import "react-gallery-carousel/dist/index.css";
function Info({ apartmentShow }) {
  return apartmentShow.map((list) => (
    <div className="information">
      <div className="headerInfo headerInfo1">מידע</div>
      <div className="allInfo">
        <div className="info">
          <h2>{list.name}.</h2>
          <h3>
            {list.area}, {list.city}.
          </h3>
          <h4>
            {list.rooms} חדרים, עד {list.beds} מיטות.
          </h4>
          <h4>
            החל מ{list.price} ש"ח ל{list.priceMethod}.
          </h4>
          <h5>{list.long}</h5>
        </div>
        <div className="special">
          <h5>
            {list.special.map((special) => (
              <li>{special}</li>
            ))}
          </h5>
        </div>
      </div>
    </div>
  ));
}

export default Info;
