/**
 * @function
 * @name showLoadingProgress
 * @description reducer for action.
 * @param {Object} state  - reducer state
 * @param {Object} action - action context
 * @return {OBJECT} Action context
 */
export const showLoadingProgress = (state, action) => ({
  ...state,
  ...action
});
