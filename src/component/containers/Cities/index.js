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
import React from "react";
// import PropTypes from "prop-types";
//#endregion
//#region components
import { WeSearch } from "../../presentationals";
//#endregion

const Cities = () => {
  return (
    <>
      <WeSearch />
      <div>
        <p>This the city partial view</p>
      </div>
    </>
  );
};

Cities.propTypes = {};
export default Cities;
