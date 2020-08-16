import React from 'react'


class ThemedButton extends React.Component{
    //static contextType = ThemeContext
    
    render(){
        return (
            <button style={{backgroundColor: `${this.context}`}}>Click here</button>
        )
    }
}


export default ThemedButton