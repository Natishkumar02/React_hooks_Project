import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  console.log("Dark mode is", darkMode ? "enabled" : "disabled");

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;
