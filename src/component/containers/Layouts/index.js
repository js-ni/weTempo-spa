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
import { Layout, Menu, Typography } from "antd";
import PropTypes from "prop-types";
//#endregion
//#region assets
import {
  HomeOutlined,
  Html5TwoTone,
  AppstoreTwoTone,
  GithubOutlined
} from "@ant-design/icons";
//#endregion

const { Sider, Footer } = Layout;
const { Text } = Typography;

const Layouts = ({ children }) => {
  return (
    <Layout className="we-layout">
      <Sider className="we-sider" collapsed="true" theme="light">
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
          <strong>{`<JsNi />`}</strong> ©2020 <Html5TwoTone />{" "}
          <a
            href="https://github.com/clenondavis"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Text code>
              <strong>
                <GithubOutlined /> boykland/clenondavis
              </strong>
            </Text>
          </a>
          <a
            href="https://github.com/js-ni"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Text code>
              <strong>
                <GithubOutlined /> Javascript Nicaragua
              </strong>
            </Text>
          </a>
          <Text type="secondary">Repos</Text>
          <a
            href="https://github.com/js-ni/weTempo-spa"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Text code>
              <strong>
                <GithubOutlined /> SPA
              </strong>
            </Text>
          </a>
          <a
            href="https://github.com/js-ni/weTempo-api"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Text code>
              <strong>
                <GithubOutlined /> API
              </strong>
            </Text>
          </a>
        </Footer>
      </Layout>
    </Layout>
  );
};

Layouts.propTypes = {
  children: PropTypes.node
};
export default Layouts;
