import React, { useState, useEffect } from "react";
import "../styles.css"; //<<--- Required

//------------------------------------------------------------------
const App: React.FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        const savedTheme = localStorage.getItem("theme"); // Get the saved theme from localStorage ("dark" or "light")
        return savedTheme === "dark"; // If the saved value is "dark", set initial state to true (dark mode enabled)
    });
    //------------------------------------------------------------------

    useEffect(() => {
        if (darkMode) {
            localStorage.setItem("theme", "dark");
            document.body.classList.add("dark");
            console.log("🌙 Dark Theme Applied"); //Optional but Better have
        } else {
            localStorage.setItem("theme", "light");
            document.body.classList.remove("dark");
            console.log("☀️ Light Theme Applied"); //Optional but Better have
        }
    }, [darkMode]);
    //------------------------------------------------------------------
    return (
        <div>
            <button
                className=""
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? "☀️" : "🌙"}
            </button>
        </div>
    );
};

export default App;
