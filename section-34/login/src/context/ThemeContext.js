import React, { createContext } from "react";
import useToggle from "../hooks/useToggle";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [isDarkMode, toggleIsDarkMode] = useToggle(false);

  const toggleTheme = () => toggleIsDarkMode(isDarkMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {this.props.children}
    </ThemeContext.Provider>
  );
}
