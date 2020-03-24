/**
 * @file components/presentationals/WeSearch/index.js
 * @name Component/Presentational/WeSearch
 * @classdesc Partial page container for each partial view
 * @memberof Component/Presentationals
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 * @example
 * <WeSearch />
 */

//#region lib
import React from "react";
import { Input } from "antd";
import PropTypes from "prop-types";
//#endregion
//#region assets
//#endregion

const { Search } = Input;

const WeSearch = ({ placeholder }) => {
  return (
    <Search placeholder={placeholder} onSearch={() => {}} enterButton></Search>
  );
};

WeSearch.propTypes = {
  placeholder: PropTypes.string
};
export default WeSearch;
