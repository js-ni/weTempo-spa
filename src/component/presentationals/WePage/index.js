/**
 * @file components/presentationals/WePage/index.js
 * @name Component/Presentational/WePage
 * @classdesc Partial page container for each partial view
 * @memberof Component/Presentationals
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 * @example
 * <wePage>
 * </wePage>
 */

//#region lib
import React from "react";
import { Layout, PageHeader } from "antd";
import PropTypes from "prop-types";
//#endregion
//#region assets
//#endregion

const { Content } = Layout;

const WePage = ({ children, pageTitle, pageSubTitle }) => {
  return (
    <div>
      <PageHeader
        onBack={() => null}
        title={pageTitle}
        subTitle={pageSubTitle}
      />
      <Content style={{ padding: 24 }}>
        <div style={{ padding: 24, minHeight: 360 }}>{children}</div>
      </Content>
    </div>
  );
};

WePage.propTypes = {
  children: PropTypes.node,
  pageTitle: PropTypes.string.isRequired,
  pageSubTitle: PropTypes.string
};
export default WePage;
