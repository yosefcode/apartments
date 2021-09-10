import "./apartmentShow.css";

function ApartmentShow({ setStatus, show }) {
  return (
    <div className="home">
      <div
        className="transport"
        onClick={() => {
          setStatus(false);
        }}
      >
        <div className="show">
          {show.map((list) => (
            <div
              className="box"
              key={list._id}
              // onClick={() => {
              //   setStatus(false);
              // }}
            >
              <div>
                <img className="imgaa" src={list.firstImage} alt=""></img>
              </div>
              <div>
                {list.images.map((images) => (
                  <img className="imgaa" src={images} alt=""></img>
                ))}
              </div>
              <div>
                דירת {list.rooms} חדרים - ב{list.city}
                <br />
                עד {list.beds} מיטות
                <br />
                {list.long}
              </div>
              <div>
                החל מ{list.price} ש"ח ללילה
                <br />
                {list.phone}
              </div>
            </div>
          ))}{" "}
        </div>
      </div>
    </div>
  );
}

export default ApartmentShow;
