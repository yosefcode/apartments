import "./showFavorite.css";
import React, { useState, useEffect, useContext } from "react";
import { Favorite } from "@mui/icons-material/";
import { Link } from "react-router-dom";
import { Cancel, ArrowBack } from "@mui/icons-material/";
import { AppContext } from "../../../variable-Context";

function ShowFavorite() {
  const { listIDForFavorite, setListIDForFavorite } = useContext(AppContext);

  var listFavoriteLocalStorage =
    JSON.parse(localStorage.getItem(`favorite`)) || [];
  // var listFavoriteLocalStorage =
  //   JSON.parse(localStorage.getItem(`favorite`)) || [];

  useEffect(() => {
    // console.log(vorite);
    setListIDForFavorite(listFavoriteLocalStorage);
    // setListIDForFavorite(JSON.parse(localStorage.getItem(`favorite`)));

    // if (findFavorite) {
    //   setIconFavorite(favorite);
    // } else {
    //   setIconFavorite(notFavorite);
    // }
  }, [!listIDForFavorite]);

  const onmouseOver = () => {
    setListIDForFavorite(listFavoriteLocalStorage);

    // console.log("jjjjj");
  };
  const onmouseOut = () => {
    // console.log("jjjjj");
  };

  return (
    <div>
      <div
        className="showFavorite"
        onMouseOver={onmouseOver}
        // onMouseOut={onmouseOut}
      >
        <Favorite
          // onMouseOver={onmouseOver}
          // onMouseOut={onmouseOut}
          className={
            listIDForFavorite.length > 0
              ? "iconShowFavorite"
              : "iconShowFavorite1"
          }
        ></Favorite>
        <div className="amountFavorite">{listIDForFavorite.length}</div>
        <div className="divAllFavorite">
          <Link className="link" to={"/myfavorite/"} target="_blank">
            <div className="haederShowFavorite">
              <ArrowBack
                // onClick={() => {
                //   setDivFavorite(false);
                // }}
                className="iconClose"
              />{" "}
              המועדפים שלי
            </div>
          </Link>
          <div className="contentShowFavorite">
            {listIDForFavorite.length < 1 ? (
              <div className="boxApartmentFavorite">אין מועדפים</div>
            ) : (
              listIDForFavorite.map((list) => (
                <div className="boxApartmentFavorite" key={list._id}>
                  <Cancel
                    onClick={() => {
                      const removeFavorite = listFavoriteLocalStorage.filter(
                        (favorite) => list._id !== favorite._id
                      );
                      localStorage.setItem(
                        `favorite`,
                        JSON.stringify(removeFavorite)
                      );
                      setListIDForFavorite(listFavoriteLocalStorage);
                    }}
                    className="iconDelete"
                  />{" "}
                  <Link className="link" to={"/" + list._id} target="_blank">
                    <img
                      className="imgApartmentFavorite"
                      src={list.images[0]}
                      alt=""
                    ></img>

                    <div className="infoApartmentFavorite">
                      {list.name}
                      <br /> {list.city}. {list.phone}
                    </div>
                  </Link>
                </div>
              ))
            )}{" "}
          </div>
        </div>
        {/* )} */}
      </div>
    </div>
  );
}

export default ShowFavorite;
