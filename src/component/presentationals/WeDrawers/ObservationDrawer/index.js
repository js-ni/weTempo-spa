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
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
//#endregion
//#region antd
import {
  Form,
  Row,
  Col,
  Input,
  Statistic,
  Button,
  PageHeader,
  Switch,
  Typography,
  Alert
} from "antd";
import {
  PlusOutlined,
  CloseOutlined,
  CheckOutlined,
  SmileOutlined
} from "@ant-design/icons";
//#endregion
//#region component
import { ParentDrawer } from "../";
import { WeComment } from "../../";
//#endregion
// #region common
import { useStore } from "../../../../common/store";
// #endregion
//#region services
import { ObservationsSvc } from "../../../../service/entities";
//#endregion

const { TextArea } = Input;
const { Text } = Typography;

const ObservationDrawer = ({
  showObservationDrawer,
  closeObservationDrawer
}) => {
  const [{ citySelected }] = useStore();
  const [observationsList, setObservations] = useState([]);
  const [allObservationsView, setAllObservationsView] = useState(true);

  useEffect(() => {
    // TODO: remove this call instance as well as singleton pattern are implemented
    const obserSvc = new ObservationsSvc();
    obserSvc.all().then(resp => {
      setObservations(resp);
    });
  }, []);

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
              <Button onClick={() => {}} type="dashed" icon={<PlusOutlined />}>
                ADD
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Row>
        <Col span={24}>
          <PageHeader
            title="Observations"
            subTitle={
              <>
                <Switch
                  checkedChildren={<CheckOutlined />}
                  unCheckedChildren={<CloseOutlined />}
                  checked={allObservationsView}
                  onChange={checked => setAllObservationsView(checked)}
                />
                {allObservationsView ? (
                  <Text type="secondary">All Observations</Text>
                ) : (
                  <Text type="secondary">My Observations</Text>
                )}
              </>
            }
          />
          {!allObservationsView && (
            <Alert
              icon={<SmileOutlined />}
              message="This feature is on progress..."
              type="info"
              showIcon
            />
          )}
        </Col>
        {observationsList.map(item => (
          <Col key={item.uuid} span={24}>
            <WeComment text={item.text} date={item.date} />
          </Col>
        ))}
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
