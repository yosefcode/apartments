import Baner from "../../components/baner";
import CalendarComponent from "../../components/CalendarComponent/CalendarComponent";

function Info({ apartmentShow }) {
  return (
    <div className="info">
      <div style={{ width: "90%" }}>
        <Baner content={"מחפשים מקום אירוח..."} />
        <div className="info_content_left">
          עיר:
          {apartmentShow.city?.length > 0 && (
            <div className="div_all_city">
              {apartmentShow.city.map((city, index) => (
                <div key={index} className="div_city">
                  {city}
                </div>
              ))}
            </div>
          )}
          <br />
          {apartmentShow.rooms && `${apartmentShow.rooms} חדרים`}
          <br />
          <br />
          {apartmentShow.beds && `${apartmentShow.beds} מיטות`} <br />
          <br />
          {apartmentShow.price && `במחיר ${apartmentShow.price} ש"ח.`} <br />
          <br />
          {apartmentShow.long && (
            <div>
              מה אנחנו מחפשים?
              <br />
              {apartmentShow.long}
            </div>
          )}{" "}
        </div>
      </div>

      <div style={{ width: "90%" }}>
        <Baner content={"מציעים בתמורה..."} />
        <div className="info_content_left">
          עיר:
          {apartmentShow.cityChange?.length > 0 && (
            <div className="div_all_city">
              <div className="div_city">{apartmentShow?.cityChange[0]}</div>
            </div>
          )}
          <br />
          {apartmentShow.roomsChange && `${apartmentShow.roomsChange} חדרים`}
          <br />
          <br />
          {apartmentShow.bedsChange && `${apartmentShow.bedsChange} מיטות`}{" "}
          <br />
          <br />
          {apartmentShow.longChange && (
            <div>
              מה אנחנו מציעים?
              <br />
              {apartmentShow.longChange}
            </div>
          )}{" "}
          {/* <CalendarComponent dateBusy={apartmentShow?.dateBusy} /> */}
        </div>
      </div>
    </div>
  );
}

export default Info;
