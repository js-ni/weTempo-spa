/**
 * @file common/store/index.js
 * @module common/store
 * @desc This is the encapsulation of all reducers in a store.
 * this a revision base on vanderleisilva approach
 * https://github.com/vanderleisilva/react-context.git
 * @since v1.0.0
 * @author vanderleisilva <vanderlei.alves.da.silva@gmail.com>
 * @return {Object} List of store reducers
 */

import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(null);

export const StoreProvider = ({ initialState, reducer, children }) => (
  <StateContext.Provider
    value={useReducer(reducer, initialState)}
    children={children}
  />
);

export const useStore = () => useContext(StateContext);
