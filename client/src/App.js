import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/home";
import Kesher from "./components/kesher/kesher";
import Bar from "./components/bar/bar";
import ApartmentShow from "./components/apartmentShow/apartmentShow";
import MyFavoritePage from "./components/favorite/myFavorite-page/myFavorite-page";
import PersonalPage from "./components/personalPage/personalPage";
import Login from "./components/login/login";
import { AppContext } from "./variable-Context";
import axios from "axios";
import { initializeApp } from "firebase/app";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

function App() {
  const topFunction = () => {
    window.scrollTo(0, 0);
  };

  const [filter, setFilter] = useState({});
  let [list, setList] = useState([]);
  let [listIDForFavorite, setListIDForFavorite] = useState([]);
  let [scrollTop, setScrollTop] = useState(true);

  // useEffect(() => {
  //   axios.post(`/api/list/filter/`, filter).then((res) => {
  //     const getFilter = () => {
  //       setList(res.data);
  //     };
  //     res.data < 1 ? getData() : getFilter();
  //   });
  // }, [filter]);

  // useEffect(() => {
  //   axios.get("/api/list/").then((res) => {
  //     setList(res.data);
  //   });
  // });
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
  // }, []);

  const globalVariable = {
    filter: filter,
    setFilter: (value) => setFilter(value),
    list: list,
    setList: (value) => setList(value),
    listIDForFavorite: listIDForFavorite,
    setListIDForFavorite: (value) => setListIDForFavorite(value),
  };

  const firebaseConfig = {
    apiKey: "AIzaSyAm6XyXktf-Yp4FcKAIVwqOop5dTtpPKeo",
    authDomain: "loginapartment-9d83c.firebaseapp.com",
    databaseURL: "https://loginapartment-9d83c-default-rtdb.firebaseio.com",
    projectId: "loginapartment-9d83c",
    storageBucket: "loginapartment-9d83c.appspot.com",
    messagingSenderId: "581621671195",
    appId: "1:581621671195:web:c9460ca056d94d63d49fbe",
    measurementId: "G-9T05LHHKK5",
  };

  initializeApp(firebaseConfig);

  return (
    <div className="App" dir="rtl">
      <AppContext.Provider value={globalVariable}>
        <Router>
          {/* {window.addEventListener("scroll", function () {
            if (window.scrollY > 110) {
              setScrollTop(true);
            } else {
              setScrollTop(false);
            }
          })} */}
          {scrollTop && (
            <div className="top">
              <DoubleArrowIcon
                onClick={topFunction}
                style={{ fontSize: "3vw" }}
              />
            </div>
          )}
          <Bar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/message/">
              <Kesher />
            </Route>

            <Route exact path="/login/">
              <Login />
            </Route>

            <Route path="/login/:id">
              <PersonalPage />
            </Route>

            <Route path="/myfavorite/">
              <MyFavoritePage />
            </Route>

            <Route exact path="/:id">
              <ApartmentShow />
            </Route>
          </Switch>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
