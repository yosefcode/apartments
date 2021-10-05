import "./addFavorite.css";
import React, { useState, useEffect } from "react";
import { FavoriteBorder, Favorite } from "@mui/icons-material/";

function FavoriteIcon({ listID }) {
  var listFavorite = JSON.parse(localStorage.getItem(`favorite`)) || [];
  const favorite = <Favorite className="favoriteIcon" />;
  const notFavorite = <FavoriteBorder className="favoriteIcon" />;

  const [iconFavorite, setIconFavorite] = useState();

  const findFavorite = listFavorite.find((favorite) => favorite === listID);

  useEffect(() => {
    if (findFavorite) {
      setIconFavorite(favorite);
    } else {
      setIconFavorite(notFavorite);
    }
  }, [findFavorite]);

  const changeFavorite = () => {
    if (!findFavorite) {
      localStorage.setItem(
        `favorite`,
        JSON.stringify([
          ...(JSON.parse(localStorage.getItem(`favorite`)) || []),
          listID,
        ])
      );
      setIconFavorite(favorite);
    } else {
      const removeFavorite = JSON.parse(
        localStorage.getItem(`favorite`)
      ).filter((favorite) => listID !== favorite);
      localStorage.setItem(`favorite`, JSON.stringify(removeFavorite));
      setIconFavorite(notFavorite);
    }
  };

  return <div onClick={changeFavorite}>{iconFavorite} </div>;
}

export default FavoriteIcon;
