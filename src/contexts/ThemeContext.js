import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [lightTheme, setLightTheme] = useState(true);

  const toggleTheme = () => {
    setLightTheme(!lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ lightTheme, toggleTheme, setLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
