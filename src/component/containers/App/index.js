/**
 * @file components/containers/App/index.js
 * @name Component/Containers/App
 * @memberof Component/Containers
 * @classdesc Main component for app
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 * @example
 * <App>
 * </App>
 */

//#region lib
import React from "react";
import { Route } from "react-router-dom";
//#endregion
//#region styles
// TODO: migrate to materializecss
import "antd/dist/antd.css";
import "./App.css";
//#endregion
//#region assets
//#endregion
//#region components
import { Layouts, Cities } from "../";
//#endregion

const App = () => {
  return (
    <Layouts>
      <Route path="/" component={Cities}></Route>
    </Layouts>
  );
};

App.propTypes = {};
export default App;
