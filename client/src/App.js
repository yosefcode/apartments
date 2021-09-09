import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Filter from "../src/components/filter/filter";

import "./App.css";
import Home from "./components/home/home";
import Kesher from "./components/kesher/kesher";
import Bar from "./components/bar/bar";

function App() {
  //   const topFunction = () => {
  //     document.documentElement.scrollTop = 0;
  //   };
  const [filter, setFilter] = useState({});

  return (
    <div className="App" dir="rtl">
      <Router>
        {/* <Route path="/:id"> */}
        <Bar />
        <br />
        <br />
        {/* </Route> */}
        <Switch>
          <Route exact path="/">
            <Home filter={filter} setFilter={setFilter} />
            <Filter filter={filter} setFilter={setFilter} />
          </Route>

          <Route path="/דף-הבית/:id">
            <Home filter={filter} setFilter={setFilter} />
            <Filter filter={filter} setFilter={setFilter} />
          </Route>

          <Route path="/פרסם-דירה/:id">
            <Kesher />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
