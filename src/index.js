//#region lib
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
//#endregion
//#region style
import "./index.css";
//#endregion
//#region components
import { App } from "./component/containers";
//#endregion
//#region services
import * as serviceWorker from "./serviceWorker";
//#endregion

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
