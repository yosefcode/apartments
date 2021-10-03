import "./showFavorite.css";
import React, { useState, useEffect, useContext } from "react";
import { FavoriteBorder, Favorite } from "@mui/icons-material/";

function ShowFavorite() {
  const [divFavorite, setDivFavorite] = useState(false);
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
        {divFavorite && <div className="divShowFavori">ddddddddddddddddd</div>}
      </div>
    </div>
  );
}

export default ShowFavorite;
