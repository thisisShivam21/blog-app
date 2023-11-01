"use client"
import React, { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext()

// storing in local storage
const getFromLocalStorage = () => {
    if (typeof window !== "undefined") {
        const value = localStorage.getItem("theme")
        // returning the value or if the user visits the page for first time it returns the "light" theme by default.
        return value || "light"
    }
}

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return getFromLocalStorage()
    })
    // Toggle functionality
    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    //Updating the localStorage
    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])
    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}