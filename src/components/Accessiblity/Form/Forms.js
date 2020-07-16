import React, { Fragment } from 'react'
import TextInput from './TextInput'

class Form extends React.Component {
    constructor(props){
        super(props)

        this.lastNameInput = React.createRef()
    }

    onEnd(inputName){
        // Focalize explicitamente a entrada de texto usando a API DOM 
        // Nota: estamos acessando o DOM "atual" para obter o elemento

        if(inputName === 'lastname'){
            this.lastNameInput.current.focus()
        }
    }

    render(){
        return (
            <Fragment>
                <label htmlFor="nameInput">Nome:</label>
                <input id="nameInput" autoFocus onKeyUp={() => this.onEnd('lastname')} placeholder="Name" type="text" name="name"/>

                <TextInput inputRef={this.lastNameInput} onKeyUp={this.onEnd}/>
            </Fragment>
        )
    }
}

export default Form