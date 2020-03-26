/**
 * @name CityReducer
 * @memberof module:common/reducers
 * @type {ReduxReducer}
 * @return {Object} Reducer Specification
 */

import { SET_CITY_SELECTED } from "../../actions/city/types";
import { setCitySelected } from "./reducer";

export default {
  [SET_CITY_SELECTED]: setCitySelected
};
