import { createContext, useContext, useEffect, useState } from "react";

export type ThemeType = "dark" | "light";

interface IThemeContext {
  toggleTheme: () => void;
  theme: ThemeType;
}

export const ThemeContext = createContext({} as IThemeContext);

export default function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<ThemeType>(
    (localStorage.getItem("theme") as ThemeType) || "dark",
  );

  function toggleTheme() {
    setTheme((prev) => {
      localStorage.setItem("theme", prev === "dark" ? "light" : "dark");
      return prev === "dark" ? "light" : "dark";
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
