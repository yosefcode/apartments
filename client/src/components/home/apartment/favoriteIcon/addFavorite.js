import "./addFavorite.css";
import React, { useState, useEffect, useContext } from "react";
import { FavoriteBorder, Favorite } from "@mui/icons-material/";
import { AppContext } from "../../../../variable-Context";

function FavoriteIcon({ apartmentForFavorite }) {
  const { listIDForFavorite, setListIDForFavorite } = useContext(AppContext);

  var listFavorite = JSON.parse(localStorage.getItem(`favorite`)) || [];
  // const favorite = console.log("aaa");
  // const notFavorite = console.log("sss");
  const favorite = <Favorite className="favoriteIcon" />;
  const notFavorite = <FavoriteBorder className="favoriteIcon" />;

  const [iconFavorite, setIconFavorite] = useState("");
  const [vorite, setvorite] = useState([]);

  const findFavorite = listFavorite.find(
    (favorite) => favorite._id === apartmentForFavorite._id
  );

  useEffect(() => {
    // console.log(vorite);
    setListIDForFavorite(JSON.parse(localStorage.getItem(`favorite`)));

    // if (findFavorite) {
    //   setIconFavorite(favorite);
    // } else {
    //   setIconFavorite(notFavorite);
    // }

    setIconFavorite(findFavorite ? favorite : notFavorite);
  }, [findFavorite]);
  // console.log(findFavorite);

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

export default FavoriteIcon;
