import React, { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = React.createContext<ThemeContextType>({
  theme: "",
  toggleTheme: () => {},
});

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  const themeValue: ThemeContextType = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
