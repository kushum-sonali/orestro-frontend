import React, { useState } from "react";  
import { createContext } from "react";
export const themeContext = createContext(null)
const ThemeProvider = (props)=>{
    const [theme, setTheme] = useState('dark')
    const toggleTheme = ()=>{
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    
    return (
        <themeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </themeContext.Provider>
    )

}

export default ThemeProvider