import "./showFavorite.css";
import React, { useState, useEffect, useContext } from "react";
import { Favorite } from "@mui/icons-material/";
import { Link } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import { AppContext } from "../../variable-Context";

function ShowFavorite() {
  const { listIDForFavorite, setListIDForFavorite } = useContext(AppContext);

  const [divFavorite, setDivFavorite] = useState(false);
  // var listFavoriteLocalStorage =
  //   JSON.parse(localStorage.getItem(`favorite`)) || [];

  // useEffect(() => {
  //   // console.log(vorite);
  //   setListIDForFavorite(listFavoriteLocalStorage);
  //   // setListIDForFavorite(JSON.parse(localStorage.getItem(`favorite`)));

  //   // if (findFavorite) {
  //   //   setIconFavorite(favorite);
  //   // } else {
  //   //   setIconFavorite(notFavorite);
  //   // }
  // }, [!listIDForFavorite]);

  return (
    <div>
      <div className="showFavorite">
        <Favorite
          className="iconShowFavorite"
          onClick={() => {
            divFavorite === false
              ? setDivFavorite(true)
              : setDivFavorite(false);
          }}
        />
      </div>
      <div>
        {divFavorite && (
          <div className="divAllFavorite">
            <div className="haederShowFavorite">
              <CancelIcon
                onClick={() => {
                  setDivFavorite(false);
                }}
                className="iconClose"
              />{" "}
              המועדפים שלי
            </div>
            <div className="contentShowFavorite">
              {listIDForFavorite.length < 1 ? (
                <div className="boxApartmentFavorite">אין מועדפים</div>
              ) : (
                listIDForFavorite.map((list) => (
                  <div className="boxApartmentFavorite" key={list._id}>
                    <CancelIcon
                      onClick={() => {
                        // setListIDForFavorite(list._id);
                        const removeFavorite = JSON.parse(
                          localStorage.getItem(`favorite`)
                        ).filter((favorite) => list._id !== favorite._id);
                        localStorage.setItem(
                          `favorite`,
                          JSON.stringify(removeFavorite)
                        );
                        setListIDForFavorite(
                          JSON.parse(localStorage.getItem(`favorite`))
                        );
                      }}
                      className="iconDelete"
                    />{" "}
                    <Link className="link" to={"/" + list._id} target="_blank">
                      <img
                        className="imgApartmentFavorite"
                        src={list.firstImage}
                        alt=""
                      ></img>

                      <div className="infoApartmentFavorite">
                        נופש חלומי ב{list.city}
                        <br /> {list.city}. {list.phone}
                      </div>
                    </Link>
                  </div>
                ))
              )}{" "}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShowFavorite;
