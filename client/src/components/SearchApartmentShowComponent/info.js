import Baner from "../../components/baner";
import Hebcal from "hebcal";
import gematriya from "gematriya";

function Info({ apartmentShow }) {
  const Dates = (dateBusy) => {
    const DateTile = (date) => {
      const hebDate = Hebcal.HDate(date);
      return (
        <div className="dateTile">
          <div className="date_cal">{`${date.getDate()}/${
            date.getMonth() + 1
          }`}</div>
          <div className="date_heb">
            {" "}
            {gematriya(hebDate.getDate())}
            <br />
            <div className="month_heb">{hebDate.getMonthName("h")}</div>
          </div>
        </div>
      );
    };

    return (
      dateBusy.length > 0 && (
        <div className="div_date">
          בתאריכים:
          <br />
          <div className="div_all_date">
            {dateBusy.map((date, index) => (
              <div key={index} className="date">
                {DateTile(new Date(date))}
              </div>
            ))}
          </div>
        </div>
      )
    );
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="info">
        <div className="info_apartment">
          <Baner content={"מחפשים מקום אירוח..."} />
          <div className="info_content_left">
            {apartmentShow.area && `ב${apartmentShow.area}`}
            <br /> <br />
            {apartmentShow.city?.length > 0 && (
              <div>
                עיר:
                <div className="div_all_city">
                  {apartmentShow.city.map((city, index) => (
                    <div key={index} className="div_city">
                      {city}
                    </div>
                  ))}
                </div>
                <br />
              </div>
            )}
            {apartmentShow.rooms && (
              <div>
                {" "}
                {`${apartmentShow.rooms} חדרים`} <br /> <br />
              </div>
            )}
            {apartmentShow.beds && (
              <div>
                {`${apartmentShow.beds} מיטות`} <br />
                <br />
              </div>
            )}
            {apartmentShow.price && (
              <div>
                {`במחיר ${apartmentShow.price} ש"ח.`} <br />
                <br />{" "}
              </div>
            )}
            {apartmentShow.long && (
              <div>
                מה אנחנו מחפשים?
                <br />
                <div className="div_long">{apartmentShow.long}</div>
              </div>
            )}{" "}
          </div>
          <div className="date_screenSM">{Dates(apartmentShow.dateBusy)}</div>
        </div>

        {apartmentShow?.model === "2" || apartmentShow?.model === "3" ? (
          <div className="info_apartment">
            <Baner content={"מציעים בתמורה..."} />
            <div className="info_content_left">
              {apartmentShow.areaChange && `ב${apartmentShow.areaChange}`}
              <br /> <br />
              עיר:
              <div className="div_all_city">
                <div className="div_city">{apartmentShow?.cityChange}</div>
              </div>
              <br />
              {apartmentShow.roomsChange &&
                `${apartmentShow.roomsChange} חדרים`}
              <br />
              <br />
              {apartmentShow.bedsChange &&
                `${apartmentShow.bedsChange} מיטות`}{" "}
              <br />
              <br />
              {apartmentShow.longChange && (
                <div>
                  מה אנחנו מציעים?
                  <br />
                  <div className="div_long">{apartmentShow.longChange}</div>
                </div>
              )}{" "}
            </div>
          </div>
        ) : null}
      </div>
      <div className="date_screenLG">{Dates(apartmentShow.dateBusy)}</div>
    </div>
  );
}

export default Info;
