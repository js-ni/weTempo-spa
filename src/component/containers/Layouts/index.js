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
import { Layout, Menu, Breadcrumb } from "antd";
import PropTypes from "prop-types";
//#endregion
//#region assets
import { DesktopOutlined } from "@ant-design/icons";
//#endregion

const { Sider, Header, Content, Footer } = Layout;

const Layouts = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed="true" onCollapse={() => {}} theme="light">
        <Menu defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            <DesktopOutlined />
            <span>Option 1</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content>
          <Breadcrumb>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          {children}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          JsNi ©2018 Created by JsNi contributors
        </Footer>
      </Layout>
    </Layout>
  );
};

Layouts.propTypes = {
  children: PropTypes.node
};
export default Layouts;
