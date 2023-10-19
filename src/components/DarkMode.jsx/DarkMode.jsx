import React, { useEffect, useState } from 'react'
import DarkModeToggle from "react-dark-mode-toggle";

const DarkMode = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedThemeFromLS = localStorage.getItem('byteSyncTheme');
        if (storedThemeFromLS === 'dark') {
            setIsDarkMode(true);
        }
    }, []);


    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('byteSyncTheme', isDarkMode ? 'light' : 'dark');
    }



    isDarkMode ? document.querySelector("html").setAttribute("data-theme", "dark")
        :
        document.querySelector("html").setAttribute("data-theme", "light")


    return (

        <DarkModeToggle
            onChange={handleToggle}
            checked={isDarkMode}
            size={80}
        />



    )
}

export default DarkMode
