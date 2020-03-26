/**
 * @function
 * @name setCitySelected
 * @memberof CityReducer
 * @description reducer for action.
 * @param {Object} state  - reducer state
 * @param {Object} action - action context
 * @return {OBJECT} Action context
 */
export const setCitySelected = (state, action) => ({
  ...state,
  ...action
});
