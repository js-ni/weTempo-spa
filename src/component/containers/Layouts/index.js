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
import { Layout, Menu } from "antd";
import PropTypes from "prop-types";
//#endregion
//#region assets
import { HomeOutlined, Html5TwoTone, AppstoreTwoTone } from "@ant-design/icons";
//#endregion

const { Sider, Footer } = Layout;

const Layouts = ({ children }) => {
  return (
    <Layout className="we-layout">
      <Sider
        className="we-sider"
        collapsed="true"
        onCollapse={() => {}}
        theme="light"
      >
        <Menu className="we-menu" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item className="we-menu-item" key="1">
            <HomeOutlined className="we-icon" />
            <span>Home</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="we-content-container">
        {children}
        <Footer className="we-footer">
          JsNi ©2018 <Html5TwoTone /> <AppstoreTwoTone /> Created by JsNi
          contributors
        </Footer>
      </Layout>
    </Layout>
  );
};

Layouts.propTypes = {
  children: PropTypes.node
};
export default Layouts;
