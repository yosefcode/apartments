import CheckBoxIcon from "@mui/icons-material/CheckBox";
import RentTime from "../rentTime/rentTime";
import Baner from "../baner";
function Info({ apartmentShow }) {
  return (
    <div className="information">
      <div className="info">
        <div>
          <h2>{apartmentShow.nameApartment}</h2>
          <h3>
            איזור {apartmentShow.area} - {apartmentShow.city}
          </h3>
          {apartmentShow.street ? <h4>רחוב {apartmentShow.street}</h4> : null}
          <h4>
            {apartmentShow.rooms} חדרים, עד {apartmentShow.beds} מיטות.
          </h4>
          <h4>
            החל מ-{apartmentShow.price} ש"ח ל{apartmentShow.priceMethod}.
          </h4>
        </div>
        <div style={{ marginTop: "25px" }}>
          <h5>{apartmentShow.long}</h5>
        </div>
      </div>
      <div className="special">
        <h5>
          {apartmentShow.special.map((special) => (
            <li>
              <CheckBoxIcon
                style={{
                  fontSize: "2rem",
                  position: "relative",
                  top: "5px",
                  color: "var(--blue)",
                  backgroundColor: "var(--purple)",
                }}
              />{" "}
              {special}
            </li>
          ))}
        </h5>
      </div>
      {apartmentShow?.times.length > 0 ? (
        <div className="div_rentTime">
          זמני ההשכרה:{" "}
          <div>
            <RentTime rentTime={apartmentShow.times} />
          </div>
        </div>
      ) : null}
      {apartmentShow?.webSite ? (
        <div className="move_website_apartment">
          <a href={apartmentShow.webSite} target="_blank" rel="noreferrer">
            <Baner content={`לאתר מפרסם המודעה  >  >  >  >  >`} />
          </a>
        </div>
      ) : null}
    </div>
  );
}

export default Info;
