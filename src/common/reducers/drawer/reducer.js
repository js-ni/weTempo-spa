/**
 * @function
 * @name showObservationDrawer
 * @memberof DrawerReducer
 * @description reducer for action.
 * @param {Object} state  - reducer state
 * @param {Object} action - action context
 * @return {OBJECT} Action context
 */
export const showObservationDrawer = (state, action) => ({
  ...state,
  ...action
});
