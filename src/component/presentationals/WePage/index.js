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
//#region material
//#endregion

const { Content } = Layout;

const WePage = ({ children, pageTitle, pageSubTitle }) => {
  return (
    <>
      <PageHeader title={pageTitle} subTitle={pageSubTitle} />
      <Content className="we-page-content-container">{children}</Content>
    </>
  );
};

WePage.propTypes = {
  children: PropTypes.node,
  pageTitle: PropTypes.string.isRequired,
  pageSubTitle: PropTypes.string
};
export default WePage;
