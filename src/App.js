import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/home/home";
import Pirsomot from "./components/pirsomot/pirsomot";
import Skarim from "./components/skarim/skarim";
import Kesher from "./components/kesher/kesher";
import List from "./components/list/list";
import Newsletter from "./components/newsletter/newsletter";
import HeaderHome from "./components/home/headerhome.jpg";
import HeaderSkr from "./components/skarim/headerskr.jpg";
import HeaderPrs from "./components/pirsomot/headerprs.jpg";
import Bar from "./components/bar/bar";

function App() {
  //   const topFunction = () => {
  //     document.documentElement.scrollTop = 0;
  //   };

  return (
    <div className="App" dir="rtl">
      <head>
        <script
          data-ad-client="ca-pub-0726942470432270"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </head>

      {/* <div className="adsr">
//         <script
//           data-ad-client="ca-pub-0726942470432270"
//           async
//           src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
//         ></script>
//       </div>
//       <div className="adsl">
//         {" "}
//         <script
//           data-ad-client="ca-pub-0726942470432270"
//           async
//           src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
//         ></script>
//       </div>
//       <div className="adsbtm">
//         {" "}
//         <script
//           data-ad-client="ca-pub-0726942470432270"
//           async
//           src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
//         ></script>
//       </div> */}

      <Router>
        <Switch>
          <Route exact path="/">
            <Bar />
            <img className="imgheader" src={HeaderHome} alt="" />
            <Home />
            <Newsletter />
          </Route>

          <Route path="/דף-הבית/:id">
            <Bar />
            <img className="imgheader" src={HeaderHome} alt="" />
            <Home />
            <Newsletter />
          </Route>

          <Route path="/סקרים-בתשלום/:id">
            <Bar />
            <img className="imgheader" src={HeaderSkr} alt="" />
            <Skarim />
            <Newsletter />
          </Route>

          <Route path="/שיווק-שותפים/:id">
            <Bar />
            <img className="imgheader" src={HeaderPrs} alt="" />
            <Pirsomot />
            <Newsletter />
          </Route>

          <Route path="/צור-קשר/:id">
            <Bar />
            <Kesher />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
