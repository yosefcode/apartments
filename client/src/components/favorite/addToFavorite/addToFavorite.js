import "./addToFavorite.css";
import React, { useState, useEffect, useContext } from "react";
import { FavoriteBorder, Favorite } from "@mui/icons-material/";
import { AppContext } from "../../../variable-Context";

function AddToFavorite({ apartmentForFavorite }) {
  const { listIDForFavorite, setListIDForFavorite } = useContext(AppContext);

  var listFavorite = JSON.parse(localStorage.getItem(`favorite`)) || [];
  const favorite = <Favorite className="favoriteIcon" />;
  const notFavorite = <FavoriteBorder className="favoriteIcon" />;

  const [iconFavorite, setIconFavorite] = useState("");

  const findFavorite = listFavorite.find(
    (favorite) => favorite._id === apartmentForFavorite._id
  );

  useEffect(() => {
    setListIDForFavorite(JSON.parse(localStorage.getItem(`favorite`)));
    setIconFavorite(findFavorite ? favorite : notFavorite);
  }, [!findFavorite]);

  const changeFavorite = () => {
    if (!findFavorite) {
      localStorage.setItem(
        `favorite`,
        JSON.stringify([
          ...(JSON.parse(localStorage.getItem(`favorite`)) || []),
          apartmentForFavorite,
        ])
      );
      setIconFavorite(favorite);
      setListIDForFavorite(JSON.parse(localStorage.getItem(`favorite`)));
    } else {
      const removeFavorite = JSON.parse(
        localStorage.getItem(`favorite`)
      ).filter((favorite) => apartmentForFavorite._id !== favorite._id);
      localStorage.setItem(`favorite`, JSON.stringify(removeFavorite));
      setIconFavorite(notFavorite);
      setListIDForFavorite(JSON.parse(localStorage.getItem(`favorite`)));
    }
  };

  return <div onClick={changeFavorite}>{iconFavorite} </div>;
}

export default AddToFavorite;
