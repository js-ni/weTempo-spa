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
import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
//#endregion
//#region antd
import { Row, Col } from "antd";
//#endregion
//#region components
import { WeCard, WePage } from "../../presentationals";
//#endregion
//#region services
import { CitiesSvc } from "../../../service/entities";
//#endregion

const Cities = () => {
  const [citiesList, setCities] = useState([]);

  useEffect(() => {
    // TODO: remove this call instance as well as singleton pattern are implemented
    const citiesSvc = new CitiesSvc();
    citiesSvc.all().then(resp => {
      setCities(resp);
    });
  }, []);

  return (
    <WePage pageTitle="City" pageSubTitle="List of cities">
      <Row>
        <Col span={24}>{/* <WeSearch /> */}</Col>
        <Col span={24}>
          <Row gutter={12}>
            {citiesList.map(city => (
              <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={4}>
                <WeCard title={city.name} cardItem={city} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </WePage>
  );
};

Cities.propTypes = {};
export default Cities;
