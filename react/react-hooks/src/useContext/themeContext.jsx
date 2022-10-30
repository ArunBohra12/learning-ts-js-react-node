import { useContext } from "react";
import { createContext, useState } from "react";

export const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("red");

  const toggleTheme = () => setTheme(theme === "blue" ? "red" : "blue");

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export const useUpdateTheme = () => useContext(ThemeUpdateContext);
export const useTheme = () => useContext(ThemeContext);
