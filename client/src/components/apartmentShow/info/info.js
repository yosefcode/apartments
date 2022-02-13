import "./info.css";
import "react-gallery-carousel/dist/index.css";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

function Info({ apartmentShow }) {
  return apartmentShow.map((list) => (
    <div className="information">
      <div className="header_div_apartmentShow header_div_apartmentShow1">
        מידע
      </div>
      <div className="allInfo">
        <div className="info">
          <div>
            <h2>{list.nameApartment}.</h2>
            <h3>
              {list.area}, {list.city}.
            </h3>
            <h4>
              {list.rooms} חדרים, עד {list.beds} מיטות.
            </h4>
            <h4>
              החל מ-{list.price} ש"ח ל{list.priceMethod}.
            </h4>
          </div>
          <div>
            <h5>{list.long}</h5>
          </div>
        </div>
        <div className="special">
          <h5>
            {list.special.map((special) => (
              <li>
                <CheckBoxIcon
                  style={{
                    fontSize: "1.7rem",
                    position: "relative",
                    top: "5px",
                    color: "green",
                  }}
                />{" "}
                {special}
              </li>
            ))}
          </h5>
        </div>
      </div>
    </div>
  ));
}

export default Info;
