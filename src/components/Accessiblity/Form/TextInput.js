import React from 'react'

class TextInput extends React.Component{
    render(){
        // Use a `ref` callback para guardar a referencia do texto no input dentro do DOM elemento em um campo (por exemplo, this.inputDeTexto).
        return (
            <input
                name="lastname" 
                type="text"
                placeholder="This is a text input"
                onKeyUp={() => this.props.onKeyUp(this.props.inputRef)}
                ref={this.props.inputRef}
                aria-label="Input label"
                aria-required="true"
            />
        )
    }
}

export default TextInput