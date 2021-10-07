import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Filter from "../src/components/filter/filter";
import Home from "./components/home/home";
import Kesher from "./components/kesher/kesher";
import Bar from "./components/bar/bar";
import ApartmentShow from "./components/apartmentShow/apartmentShow";
import MyFavoritePage from "./components/favorite/myFavorite-page/myFavorite-page";
import { AppContext } from "./variable-Context";
import axios from "axios";

function App() {
  //   const topFunction = () => {
  //     document.documentElement.scrollTop = 0;
  //   };
  const [filter, setFilter] = useState({});
  let [list, setList] = useState([]);
  let [listIDForFavorite, setListIDForFavorite] = useState([]);

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

  return (
    <div className="App" dir="rtl">
      <AppContext.Provider value={globalVariable}>
        <Router>
          <Bar />
          <Switch>
            <Route exact path="/">
              <Home />
              <Filter />
            </Route>

            <Route path="/send/">
              <Kesher />
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
