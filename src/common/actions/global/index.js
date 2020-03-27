/**
 * @name GlobalAction
 * @memberof module:common/actions
 * @type {ReduxAction}
 * @return {Object} Global Actions
 */
import { SHOW_LOADING_PROGRESS } from "./types";

/**
 * @function
 * @name showLoadingProgress
 * @memberof GlobalAction
 * @description bolean control show or hide loading progress.
 * @param {BOOLEAN} isShowLoadingProgress  - reducer state
 * @return {OBJECT} Action context
 */
export const showLoadingProgress = isShowLoadingProgress => ({
  type: SHOW_LOADING_PROGRESS,
  isShowLoadingProgress
});
