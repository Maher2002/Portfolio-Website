import React, { useContext } from "react";

import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";

import themeContext from "../../Context";

import "./Toggle.css";
const Toggle = () => {
  const theme = useContext(themeContext);

  const darkMode = theme.state.darkMode;

  const clickHandler = () => {
    theme.dispatch({ type: "toggle" });
  };

  return (
    <div className="toggle" onClick={clickHandler}>
      <Moon />
      <Sun />
      <div
        className="t-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
