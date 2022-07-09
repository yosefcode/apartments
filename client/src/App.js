import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Bar from "./pages/bar/bar";
import ApartmentShow from "./pages/apartmentShow/apartmentShow";
import MyFavoritePage from "./pages/favorite/myFavorite-page/myFavorite-page";
import PersonalPage from "./pages/personalPage/personalPage";
import Login from "./pages/login/login";
import Manager from "./pages/manager/manager";
import RegisterUser from "./pages/registerUser/registerUser";
import { AppContext } from "./variable-Context";
import { PostToServer } from "./components/getData";
import { initializeApp } from "firebase/app";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Modal from "./components/Modal";

function App() {
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

  const auth = getAuth();
  const topFunction = () => {
    window.scrollTo(0, 0);
  };

  const [filter, setFilter] = useState({});
  const [list, setList] = useState([]);
  const [listIDForFavorite, setListIDForFavorite] = useState([]);
  const [uidFirebase, setUidFirebase] = useState("");
  const [detailsUsers, setDetailsUsers] = useState([]);
  const [registeredUser, setRegisteredUser] = useState();
  const [scrollTop, setScrollTop] = useState(true);
  const [isManager, setIsManager] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [contentModal, setContentModal] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (userForFirebase) => {
      if (userForFirebase) {
        setUidFirebase(userForFirebase.uid);
        PostToServer(
          `/api/userConnected/${userForFirebase.uid}`,
          {},
          setDetailsUsers
        );
      }
    });
  }, [auth, uidFirebase]);

  useEffect(() => {
    setRegisteredUser(detailsUsers?.length > 0 ? true : false);
    setIsManager(detailsUsers?.length > 0 ? detailsUsers[0]?.manager : false);
  }, [detailsUsers]);

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
    isManager: isManager,
    setIsManager: (value) => setIsManager(value),
    registeredUser: registeredUser,
    setRegisteredUser: (value) => setRegisteredUser(value),
    detailsUsers: detailsUsers[0],
    setDetailsUsers: (value) => setDetailsUsers(value),
    uidFirebase: uidFirebase,
    setUidFirebase: (value) => setUidFirebase(value),
    isOpenModal: isOpenModal,
    setIsOpenModal: (value) => setIsOpenModal(value),
    contentModal: contentModal,
    setContentModal: (value) => setContentModal(value),
  };

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
          {isOpenModal && (
            <Modal
              isOpenModal={isOpenModal}
              setIsOpenModal={setIsOpenModal}
              content={contentModal}
            />
          )}

          {scrollTop && (
            <div className="top">
              <DoubleArrowIcon
                onClick={topFunction}
                style={{ fontSize: "3vw" }}
              />
            </div>
          )}
          <Bar />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/login/">
                <Login />
              </Route>

              <Route exact path="/register/">
                <RegisterUser />
              </Route>

              <Route path="/user/:id">
                <PersonalPage />
              </Route>

              <Route path="/myfavorite/">
                <MyFavoritePage />
              </Route>

              <Route
                exact
                path={`/manager/${process.env.REACT_APP_URL_MANAGER}`}
              >
                <Manager />
              </Route>

              <Route exact path="/:id">
                <ApartmentShow />
              </Route>
            </Switch>
          </div>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
