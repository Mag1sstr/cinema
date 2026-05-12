import { createContext, useState } from "react";

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
  const [theme, setTheme] = useState<ThemeType>("dark");

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
