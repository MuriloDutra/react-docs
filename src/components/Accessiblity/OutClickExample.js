import React from 'react'

class OutClickExample extends React.Component{
    constructor(props){
        super(props)

        this.state ={ isOpen: false }
        this.timeOutId = null
        this.toggleContainer = React.createRef()

        this.onClickHandler = this.onClickHandler.bind(this)
        this.onBlurHandler = this.onBlurHandler.bind(this)
        this.onFocusHandler = this.onFocusHandler.bind(this)
    }


    onClickHandler(){
        this.setState(currentState => ({ isOpen: !currentState.isOpen}))
    }

    // Fechamos o popover no próximo tick usando setTimeout. Isso é necessário porque precisamos primeiro checar se
    // outro filho do elemento recebeu foco como o evento blur é acionado antes do novo evento de foco.
    onBlurHandler(){
        this.timeOutId = setTimeout(() => this.setState({isOpen: false}))
    }


    onFocusHandler(){
        clearTimeout(this.timeOutId)
    }


    render(){
        return (
            <div onBlur={this.onBlurHandler} onFocus={this.onFocusHandler}>
                <button onClick={this.onClickHandler} aria-haspopup="true" aria-expanded={this.state.isOpen}>Select an option</button>
                {this.state.isOpen && (
                    <ul>
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                    </ul>
                )}
                <button>Button 02</button>
                <button>Button 03</button>
            </div>
        )
    }
}

export default OutClickExample