/**
 * @name DrawerAction
 * @memberof module:common/actions
 * @type {ReduxAction}
 * @return {Object} Global Actions
 * @since v1.0.0
 * @author boyklan/clenondavis <clenondavis@outlook.com>
 */
import { SHOW_OBSERVATION_DRAWER } from "./types";

/**
 * @function
 * @name showObservationDrawer
 * @memberof DrawerAction
 * @description bolean control open and close drawer.
 * @param {BOOLEAN} openObservationDrawer  - reducer state
 * @return {OBJECT} Action context
 */
export const showObservationDrawer = openObservationDrawer => ({
  type: SHOW_OBSERVATION_DRAWER,
  openObservationDrawer
});
