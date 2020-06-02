import React from 'react'

class Toggle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isToggleOn: true
        }
        this.handleClick = this.handleClick.bind(this) //Geralmente, se você referir a um método sem () depois dele, como onClick={this.handleClick}, você deve fazer o bind manual deste método.
    }

    handleClick(text){
        this.setState(previousState => ({
            isToggleOn: !previousState.isToggleOn
        }))
    }

    render(){
        return(
            <button onClick={this.handleClick}>
                { this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

export default Toggle