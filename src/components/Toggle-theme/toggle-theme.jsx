import { use } from "react";
import { ThemeContext } from "../Theme-context/index";
import { Button } from "../Button/button";

export const ToggleTheme = () => {
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <Button
      onClick={toggleTheme}
      title={theme === "dark" ? "Светлая тема" : "Темная тема"}
    />
  );
};
