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
import { Form, Row, Col, Input, Statistic, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
//#endregion
//#region component
import { ParentDrawer } from "../";
import { WeComment } from "../../";
//#endregion
// #region common
import { useStore } from "../../../../common/store";
// #endregion

const { TextArea } = Input;

const ObservationDrawer = ({
  showObservationDrawer,
  closeObservationDrawer
}) => {
  const [{ citySelected }] = useStore();
  return (
    <ParentDrawer
      title="Observations"
      showDrawer={showObservationDrawer}
      closeDrawer={closeObservationDrawer}
    >
      <Row>
        <Col>
          <Statistic title={citySelected.name} value={citySelected.winSpeed} />
        </Col>
      </Row>
      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="observation"
              label="Observation"
              rules={[
                { required: true, message: "Please enter an observation" }
              ]}
            >
              <TextArea placeholder="Please enter an observation" rows={4} />
            </Form.Item>
            <Form.Item>
              <Button onClick={() => {}} type="primary" icon={<PlusOutlined />}>
                ADD
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Row>
        <Col span={24}>
          <WeComment />
        </Col>
        <Col span={24}>
          <WeComment />
        </Col>
        <Col span={24}>
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
