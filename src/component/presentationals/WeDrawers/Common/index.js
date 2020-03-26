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
import { Drawer, Button } from "antd";
import PropTypes from "prop-types";
//#endregion
//#region assets
//#endregion

const CommonDrawer = ({ children, title, showDrawer, closeDrawer }) => {
  return (
    <Drawer
      title={title}
      placement="right"
      closable={false}
      visible={showDrawer}
      width={500}
      footer={
        <div
          style={{
            textAlign: "right"
          }}
        >
          <Button onClick={closeDrawer}>CANCEL</Button>
        </div>
      }
    >
      {children}
    </Drawer>
  );
};

CommonDrawer.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  showDrawer: PropTypes.bool,
  closeDrawer: PropTypes.func
};
CommonDrawer.defaultProps = {
  showDrawer: false,
  closeDrawer: () => {}
};
export default CommonDrawer;
