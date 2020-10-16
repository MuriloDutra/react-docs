import React, { Component, createRef } from 'react'


class CustomTextInput extends Component{
    constructor(props){
        super(props)
        this.textInputRef = createRef()//Cria uma ref para armazenar o elemento textInput do DOM
        this.focusTextInput = this.focusTextInput.bind(this)
    }


    focusTextInput(){
        //Explicitamente foca o input de texto usando a API do DOM diretamente
        //Nota: nós estamos acessando o campo "current" para obter um nó do DOM.
        this.textInputRef.current.focus()
    }


    render(){
        //Diz ao React que nós queremos associar o atributo ref do <input>
        //com o `textInput` que nós criamos no construtor.
        return(
            <div>
                <input type="text" ref={this.textInputRef} />
                <input type="button" value="Focus the text input" onClick={this.focusTextInput} />
            </div>
        )
    }
}


export default CustomTextInput