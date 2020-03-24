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
import "antd/dist/antd.css";
import "./App.css";
//#endregion
//#region assets
//#endregion
//#region components
import { Layouts } from "../";
import { Page } from "../../presentationals";
//#endregion

const App = () => {
  return (
    <Layouts>
      <Page>
        <Route></Route>
        <p>Content for each partial view</p>
      </Page>
    </Layouts>
  );
};

App.propTypes = {};
export default App;
