import Baner from "../../components/baner";
import Hebcal from "hebcal";
import gematriya from "gematriya";

function Info({ apartmentShow }) {
  // const DateTile = (date) => {
  //   const hebDate = Hebcal.HDate(date);
  //   return (
  //     <div className="dateTile">
  //       <div className="date_cal">{`${date.getDate()}/${
  //         date.getMonth() + 1
  //       }`}</div>
  //       <div className="date_heb">
  //         {" "}
  //         {gematriya(hebDate.getDate())}
  //         <br />
  //         <div className="month_heb">{hebDate.getMonthName("h")}</div>
  //       </div>
  //     </div>
  //   );
  // };

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
      <div className="div_date">
        בתאריכים:
        <br />
        {dateBusy && (
          <div className="div_all_date">
            {dateBusy.map((date, index) => (
              <div key={index} className="date">
                {DateTile(new Date(date))}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="info">
        <div className="info_apartment">
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
              עיר:
              {apartmentShow.cityChange?.length > 0 && (
                <div className="div_all_city">
                  <div className="div_city">{apartmentShow?.cityChange[0]}</div>
                </div>
              )}
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

      {/* <div className="div_date">
        בתאריכים:
        <br />
        {apartmentShow.dateBusy && (
          <div className="div_all_date">
            {apartmentShow.dateBusy.map((date, index) => (
              <div key={index} className="date">
                {DateTile(new Date(date))}
              </div>
            ))}
          </div>
        )}
      </div> */}
    </div>
  );
}

export default Info;
