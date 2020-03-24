/**
 * @file components/containers/Layout/index.js
 * @name Component/Containers/Layout
 * @classdesc Main Layout component for app
 * @memberof Component/Containers
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 * @example
 * <Layouts>
 * </Layouts>
 */

//#region lib
import React from "react";
// import PropTypes from "prop-types";
//#endregion
//#region antd
import { Row, Col } from "antd";
//#endregion
//#region components
import { WeSearch, WeCard } from "../../presentationals";
//#endregion

const Cities = () => {
  return (
    <Row>
      <Col span={24}>
        <WeSearch />
      </Col>
      <Col span={24}>
        <WeCard />
      </Col>
    </Row>
  );
};

Cities.propTypes = {};
export default Cities;
