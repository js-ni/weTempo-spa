/**
 * @file components/presentationals/WeList/index.js
 * @name Component/Presentational/WeList
 * @classdesc Component for list context
 * @memberof Component/Presentationals
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 * @example
 * <WeSearch />
 */

//#region lib
import React from "react";
import PropTypes from "prop-types";
//#endregion
//#region assets
//#endregion
//#region antd
import { List } from "antd";
import { CloudSyncOutlined, HeatMapOutlined } from "@ant-design/icons";
//#endregion
const WeList = ({ alignment, modelItem }) => {
  return (
    <List itemLayout={alignment}>
      <List.Item>
        <HeatMapOutlined />
        <span>{modelItem.cardinals}</span>
      </List.Item>
      <List.Item>
        <CloudSyncOutlined />
        <span>{modelItem.winSpeed}</span>
      </List.Item>
    </List>
  );
};

WeList.propTypes = {
  alignment: PropTypes.string,
  dataList: PropTypes.object.isRequired
};

WeList.defaultProps = {
  alignment: "vertical"
};
export default WeList;
