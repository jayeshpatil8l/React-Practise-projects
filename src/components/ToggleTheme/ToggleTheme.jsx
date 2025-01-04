import useLocalStorage from "./useLocalStorage";
import './styles.css'
import { useEffect, useState } from "react";

export default function ToggleTheme() {
    const key = "theme";
    const [theme, setTheme] = useLocalStorage(key, "dark");

    function handleChange(){
        setTheme(theme === "light" ? "dark" : "light");
    }
    
    return (
        <div className="main-container" data-theme = {theme}>
            <div className="theme-container">
                <button 
                    className="theme-btn"
                    onClick={handleChange}
                > Change Theme</button>
            </div>
        </div>
    )
}