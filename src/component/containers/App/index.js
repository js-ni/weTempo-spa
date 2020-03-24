/**
 * @file components/containers/App/index.js
 * @name Component/Containers/App
 * @memberof Component/Containers
 * @return {Object} List of global endpoint, define if is REST or GRAPHQL Schema
 * @classdesc Main component for app
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 * @example
 * <Layout>
 * </Layout>
 */

//#region lib
import React from "react";
//#endregion
//#region styles
import "antd/dist/antd.css";
import "./App.css";
//#endregion
//#region assets
//#endregion
//#region components
import { Layouts } from "../";
//#endregion

const App = () => {
  return (
    <Layouts>
      <p>Content for each view</p>
    </Layouts>
  );
};

App.propTypes = {};
export default App;
