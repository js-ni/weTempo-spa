/**
 * @name CityAction
 * @memberof module:common/actions
 * @type {ReduxAction}
 * @return {Object} City Actions
 * @since v1.0.0
 * @author boyklan/clenondavis <clenondavis@outlook.com>
 */
import { SET_CITY_SELECTED } from "./types";

/**
 * @function
 * @name setCitySelected
 * @memberof CityAction
 * @description set the city object selected.
 * @param {BOOLEAN} citySelected  - reducer state
 * @return {OBJECT} Action context
 */
export const setCitySelected = citySelected => ({
  type: SET_CITY_SELECTED,
  citySelected
});
