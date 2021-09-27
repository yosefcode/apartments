import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Filter from "../src/components/filter/filter";
import Home from "./components/home/home";
import Kesher from "./components/kesher/kesher";
import Bar from "./components/bar/bar";
import ApartmentShow from "./components/apartmentShow/apartmentShow";

function App() {
  //   const topFunction = () => {
  //     document.documentElement.scrollTop = 0;
  //   };
  const [filter, setFilter] = useState({});

  return (
    <div className="App" dir="rtl">
      <Router>
        <Bar filter={filter} setFilter={setFilter} />
        <Switch>
          <Route exact path="/">
            <Home filter={filter} setFilter={setFilter} />
            <Filter filter={filter} setFilter={setFilter} />
          </Route>

          <Route path="/send/">
            <Kesher />
          </Route>

          <Route exact path="/:id">
            <ApartmentShow />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
