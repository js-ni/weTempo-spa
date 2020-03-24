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
import {
  CloudSyncOutlined,
  CloudOutlined,
  CloudUploadOutlined
} from "@ant-design/icons";
//#endregion
const WeList = ({ alignment }) => {
  return (
    <List itemLayout={alignment}>
      <List.Item>
        <CloudSyncOutlined />
        <span>42 kph</span>
      </List.Item>
      <List.Item>
        <CloudOutlined />
        <span>Sun info</span>
      </List.Item>
      <List.Item>
        <CloudUploadOutlined />
        <span>Temperature</span>
      </List.Item>
    </List>
  );
};

WeList.propTypes = {
  alignment: PropTypes.string
};

WeList.defaultProps = {
  alignment: "vertical"
};
export default WeList;
