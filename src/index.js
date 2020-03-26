//#region lib
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
//#endregion
//#region style
import "./index.scss";
//#endregion
//#region components
import { App } from "./component/containers";
//#endregion
//#region services
import * as serviceWorker from "./serviceWorker";
//#endregion
//#region common
import { StoreProvider } from "./common/store";
import initialsStates from "./common/states";
import reducers from "./common/reducers";
//#endregion

ReactDOM.render(
  <StoreProvider initialState={initialsStates} reducer={reducers}>
    <Router>
      <App />
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
