/**
 * @name GlobalReducer
 * @memberof module:common/reducers
 * @type {ReduxReducer}
 * @return {Object} Reducer Specification
 */

import { SHOW_LOADING_PROGRESS } from "../../actions/global/types";
import { showLoadingProgress } from "./reducer";

export default {
  [SHOW_LOADING_PROGRESS]: showLoadingProgress
};
