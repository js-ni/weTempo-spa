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
import { Form, Row, Col, Input, Statistic } from "antd";
//#endregion
//#region component
import { ParentDrawer } from "../";
import { WeComment } from "../../";
//#endregion

const { TextArea } = Input;

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
      <Row>
        <Col>
          <Statistic title="Mexico, City" value={`12 kph`} />
        </Col>
      </Row>
      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="obsrevation"
              label="Observation"
              rules={[
                { required: true, message: "Please enter an observation" }
              ]}
            >
              <TextArea placeholder="Please enter an observation" rows={5} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Row>
        <Col>
          <WeComment />
        </Col>
      </Row>
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
