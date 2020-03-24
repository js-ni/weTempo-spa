/**
 * @file components/containers/Layout/index.js
 * @name Component/Containers/Layout
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
import { Layout } from "antd";
import PropTypes from "prop-types";
//#endregion

const Layouts = children => {
  return <Layout>{children}</Layout>;
};

Layouts.propTypes = {
  children: PropTypes.node.isRequired
};
export default Layouts;
