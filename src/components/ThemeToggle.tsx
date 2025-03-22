import React, { useState, useEffect } from "react";
import "../CSS/Main.css";

//------------------------------------------------------------------
const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });
//------------------------------------------------------------------

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
//------------------------------------------------------------------
  return (
    <div>
      <button
        className="theme-toggle-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </div>
  );
};

export default App;
