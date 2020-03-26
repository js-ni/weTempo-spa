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
import PropTypes from "prop-types";
//#endregion
//#region antd
import { Form, Row, Col, Input } from "antd";
//#endregion
//#region component
import { ParentDrawer } from "../";
//#endregion

const ObservationDrawer = ({
  showObservationDrawer,
  closeObservationDrawer
}) => {
  return (
    <ParentDrawer
      title="Observations"
      showDrawer={showObservationDrawer}
      closeDrawer={closeObservationDrawer}
    >
      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please enter user name" }]}
            >
              <Input placeholder="Please enter user name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="url"
              label="Url"
              rules={[{ required: true, message: "Please enter url" }]}
            >
              <Input
                style={{ width: "100%" }}
                addonBefore="http://"
                addonAfter=".com"
                placeholder="Please enter url"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </ParentDrawer>
  );
};

ObservationDrawer.propTypes = {
  showObservationDrawer: PropTypes.bool,
  closeObservationDrawer: PropTypes.func
};
ObservationDrawer.defaultProps = {
  showObservationDrawer: false,
  closeObservationDrawer: () => {}
};
export default ObservationDrawer;
