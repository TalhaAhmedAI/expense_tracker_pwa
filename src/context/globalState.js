import React, { createContext, useReducer } from "react";
import AppReducer from "./appReducer";

// Initial state
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
  ],
};

// Create context

export const globalContext = createContext(initialState);

// Provider component

export const GlobalProvider = ({ children }) => {
  const [state, dipatch] = useReducer(AppReducer, initialState);
  return (
    <globalContext.Provider
      value={{
        transactions: state.transactions,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};
