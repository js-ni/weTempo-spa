/**
 * @file common/reducers/index.js
 * @module common/reducers
 * @desc This is the encapsulation for all reducers
 * @since v1.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 * @return {Object} List of reducers combined
 */
import drawerReducer from "./drawer";
import cityReducer from "./city";

const createReducer = handlers => (state, action) => {
  if (!handlers.hasOwnProperty(action.type)) {
    return state;
  }

  return handlers[action.type](state, action);
};

export default createReducer({
  ...drawerReducer,
  ...cityReducer
});
