import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Filter from "../src/components/filter/filter";
import Home from "./components/home/home";
import Kesher from "./components/kesher/kesher";
import Bar from "./components/bar/bar";
import ApartmentShow from "./components/apartmentShow/apartmentShow";
import { AppContext } from "./variable-Context";

function App() {
  //   const topFunction = () => {
  //     document.documentElement.scrollTop = 0;
  //   };
  const [filter, setFilter] = useState({});

  const globalVariable = {
    filter: filter,
    setFilter: (value) => setFilter(value),
  };

  return (
    <div className="App" dir="rtl">
      <AppContext.Provider value={globalVariable}>
        <Router>
          <Bar filter={filter} setFilter={setFilter} />
          <Switch>
            <Route exact path="/">
              <Home filter={filter} setFilter={setFilter} />
              <Filter setFilter={setFilter} />
            </Route>

            <Route path="/send/">
              <Kesher />
            </Route>

            <Route exact path="/:id">
              <ApartmentShow setFilter={setFilter} filter={filter} />
            </Route>
          </Switch>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
