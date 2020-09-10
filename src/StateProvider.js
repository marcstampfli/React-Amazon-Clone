import React, { createContext, useContext, useReducer } from "react";

// Prepare teh data layer
export const StateContext = createContext();

// Wrap app and provide the data layer to every component inside app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pool info from the data layer
export const useStateValue = () => useContext(StateContext);
