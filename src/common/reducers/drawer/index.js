/**
 * @name DrawerReducer
 * @memberof module:common/reducers
 * @type {ReduxReducer}
 * @return {Object} Reducer Specification
 */

import { SHOW_OBSERVATION_DRAWER } from "../../actions/drawers/types";
import { showObservationDrawer } from "./reducer";

export default {
  [SHOW_OBSERVATION_DRAWER]: showObservationDrawer
};
