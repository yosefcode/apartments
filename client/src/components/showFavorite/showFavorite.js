import "./showFavorite.css";
import React, { useState, useEffect, useContext } from "react";
import { FavoriteBorder, Favorite } from "@mui/icons-material/";
import { AppContext } from "../../variable-Context";
import { Link } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";

function ShowFavorite() {
  const [divFavorite, setDivFavorite] = useState(false);
  const {
    filter,
    setFilter,
    list,
    setList,
    listIDForFavorite,
    setListIDForFavorite,
  } = useContext(AppContext);

  var listFavoriteLocalStorage =
    JSON.parse(localStorage.getItem(`favorite`)) || [];

  const [iconFavorite, setIconFavorite] = useState([]);

  let listFavorite = [];

  // useEffect(() => {}, [listIDForFavorite]);
  for (let i = 0; i < listFavoriteLocalStorage.length; i++) {
    const findFavorite = list.find(
      (favorite) => favorite._id === listFavoriteLocalStorage[i]
    );
    listFavorite.push(findFavorite);
  }

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
              {listFavorite.length < 1 ? (
                <div className="boxApartmentFavorite">אין מועדפים</div>
              ) : (
                listFavorite.map((list) => (
                  <div className="boxApartmentFavorite" key={list._id}>
                    <CancelIcon
                      onClick={() => {
                        // setListIDForFavorite(list._id);
                        const removeFavorite = JSON.parse(
                          localStorage.getItem(`favorite`)
                        ).filter((favorite) => list._id !== favorite);
                        localStorage.setItem(
                          `favorite`,
                          JSON.stringify(removeFavorite)
                        );
                      }}
                      className="iconClose"
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
