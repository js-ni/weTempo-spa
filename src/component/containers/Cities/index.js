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
import { Row, Col, Empty, Spin } from "antd";
//#endregion
//#region components
import { WeCard, WePage, WeDrawers } from "../../presentationals";
//#endregion
//#region services
import { CitiesSvc } from "../../../service/entities";
//#endregion
// #region common
import { useStore } from "../../../common/store";
import { drawerAction, cityAction } from "../../../common/actions";
import { CityHk } from "../../../service/hooks";
// #endregion

const { useAllCitiesFromScrapp } = CityHk;

const Cities = () => {
  // const [citiesList, setCities] = useState([]);
  const [
    { openObservationDrawer, isShowLoadingProgress },
    dispatch
  ] = useStore();
  const { showObservationDrawer } = drawerAction;
  const { ObservationDrawer } = WeDrawers;
  const { setCitySelected } = cityAction;
  const [{ citiesList }] = useAllCitiesFromScrapp();

  const openObservDrawer = citySelected => {
    dispatch(showObservationDrawer(true));
    dispatch(setCitySelected(citySelected));
  };

  const closeObservDrawer = () => {
    dispatch(showObservationDrawer(false));
  };

  return (
    <WePage pageTitle="City" pageSubTitle="List of cities">
      <Row>
        <Col span={24}>{/* <WeSearch /> */}</Col>
        <Col span={24}>
          <Row gutter={18}>
            {citiesList.map(city => (
              <Col
                className="we-mr--b--15"
                key={city.name}
                xs={24}
                sm={12}
                md={8}
                lg={6}
                xl={4}
                xxl={4}
              >
                <WeCard
                  title={city.name}
                  subTitle={city.winSpeed}
                  description={city.cardinal}
                  onClickCard={() => openObservDrawer(city)}
                />
              </Col>
            ))}
            {citiesList.length === 0 && !isShowLoadingProgress && (
              <Col span={24}>
                <Empty />
              </Col>
            )}
            {isShowLoadingProgress && (
              <Col span={24}>
                <Spin>
                  <Empty />
                </Spin>
              </Col>
            )}
          </Row>
        </Col>
        <Col span={24}>
          {openObservationDrawer && (
            <ObservationDrawer
              showObservationDrawer={openObservationDrawer}
              closeObservationDrawer={closeObservDrawer}
            />
          )}
        </Col>
      </Row>
    </WePage>
  );
};

Cities.propTypes = {};
export default Cities;
