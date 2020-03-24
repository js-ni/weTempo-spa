/**
 * @file components/presentationals/Page/index.js
 * @name Component/Presentational/Page
 * @classdesc Partial page container for each partial view
 * @memberof Component/Presentationals
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 * @example
 * <Page>
 * </Page>
 */

//#region lib
import React from "react";
import { Layout, PageHeader } from "antd";
import PropTypes from "prop-types";
//#endregion
//#region assets
//#endregion

const { Content } = Layout;

const Page = ({ children }) => {
  return (
    <div>
      <PageHeader
        onBack={() => null}
        title="Page Title"
        subTitle="This is a page subTitle"
      />
      <Content style={{ padding: 24 }}>
        <div style={{ padding: 24, minHeight: 360, background: "white" }}>
          {children}
        </div>
      </Content>
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node
};
export default Page;
