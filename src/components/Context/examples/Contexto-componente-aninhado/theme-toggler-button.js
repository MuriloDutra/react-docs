import React from 'react'
import { ThemeContext } from './theme-context'


function ThemeToggleButton(){
    // The Theme Toggler Button receives not only the theme
    // but also a toggleTheme function from the context

    return (
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
                <button onClick={toggleTheme} style={{backgroundColor: theme.background}}>
                    Toggle theme
                </button>
            )}
        </ThemeContext.Consumer>
    )
}


export default ThemeToggleButton