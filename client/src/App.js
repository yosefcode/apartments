import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/home/home";
import North from "./components/north/north";
import South from "./components/south/south";
import Center from "./components/center/center";
import Jerusalem from "./components/jerusalem/jerusalem";
import Kesher from "./components/kesher/kesher";
import Newsletter from "./components/newsletter/newsletter";
import Bar from "./components/bar/bar";
import Img from "./img.jpg";

function App() {
  //   const topFunction = () => {
  //     document.documentElement.scrollTop = 0;
  //   };
  const [value, setValue] = useState("");
  console.log("value", value);
  return (
    <div className="App" dir="rtl">
      <Router>
        {/* <Route path="/:id"> */}
        <Bar setValue={setValue} />
        <img className="imgheader" src={Img} alt="" />
        {/* </Route> */}
        <Switch>
          <Route exact path="/">
            {/* <Bar /> */}
            <Home value={value} />
            {/* <Newsletter /> */}
          </Route>

          <Route path="/דף-הבית/:id">
            {/* <Bar /> */}
            {/* <img className="imgheader" src={HeaderHome} alt="" /> */}
            <Home value={value} />
            {/* <Newsletter /> */}
          </Route>

          <Route path="/דירות-בצפון/:id">
            {/* <Bar /> */}
            <North />
          </Route>

          <Route path="/דירות-בדרום/:id">
            {/* <Bar /> */}
            <South />
          </Route>

          <Route path="/דירות-במרכז/:id">
            {/* <Bar /> */}
            <Center />
          </Route>

          <Route path="/דירות-באיזור-ירושלים/:id">
            {/* <Bar /> */}
            <Jerusalem />
          </Route>

          <Route path="/פרסם-דירה/:id">
            {/* <Bar /> */}
            <Kesher />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
