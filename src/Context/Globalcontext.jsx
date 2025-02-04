import { createContext, useReducer } from "react";

// Initial State
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Flower", amount: +20 },
  ],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Dummy Reducer (You need to define this function somewhere)
const AppReducer = (state, action) => {
  return state;
};

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
