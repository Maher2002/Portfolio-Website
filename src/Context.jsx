import React, { useReducer } from "react";

const themeContext = React.createContext();

const initialState = { darkMode: false };

const themeReducer = (state, action) => {
  if (action.type === "toggle") {
    return { darkMode: !state.darkMode };
  } else {
    return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </themeContext.Provider>
  );
};

export default themeContext;
