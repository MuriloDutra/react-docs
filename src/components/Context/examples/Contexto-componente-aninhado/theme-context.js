import React from 'react'
import { themes } from "../dynamic-context/theme-context"


export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {}
})