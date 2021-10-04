import "./showFavorite.css";
import React, { useState, useEffect, useContext } from "react";
import { FavoriteBorder, Favorite } from "@mui/icons-material/";
import { AppContext } from "../../variable-Context";
import { Link } from "react-router-dom";

function ShowFavorite() {
  const [divFavorite, setDivFavorite] = useState(false);
  const { filter, setFilter, list, setList } = useContext(AppContext);

  var listFavoriteLocalStorage =
    JSON.parse(localStorage.getItem(`favorite`)) || [];

  let listFavorite = [];

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
            <button
              onClick={() => {
                setDivFavorite(false);
              }}
            >
              X
            </button>
            {listFavorite.map((list) => (
              <div className="boxApartmentFavorite" key={list._id}>
                <Link className="link" to={"/" + list._id} target="_blank">
                  <div>
                    <img
                      className="imgApartmentFavorite"
                      src={list.firstImage}
                      alt=""
                    ></img>
                  </div>
                  <div>
                    <div className="nameApartment">נופש חלומי ב{list.city}</div>
                    <div className="location">
                      {list.city}, {list.area}.
                    </div>
                    <div className="phone">{list.phone}</div>
                  </div>
                </Link>
              </div>
            ))}{" "}
          </div>
        )}
      </div>
    </div>
  );
}

export default ShowFavorite;
