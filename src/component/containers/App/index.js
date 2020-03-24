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
import PropTypes from "prop-types";
//#endregion
//#region component
import { Button, Timeline } from "antd";
//#endregion
//#region styles
import "antd/dist/antd.css";
import "./App.css";
//#endregion
//#region assets
import logo from "./logo.svg";
//#endregion

const App = children => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button type="primary">Button</Button>
        <Timeline>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>
            Solve initial network problems 2015-09-01
          </Timeline.Item>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
          <Timeline.Item>
            Network problems being solved 2015-09-01
          </Timeline.Item>
        </Timeline>
      </header>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node.isRequired
};
export default App;
