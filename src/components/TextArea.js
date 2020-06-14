import React from 'react'

class TextArea extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            textValue: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange(event){
        this.setState({textValue: event.target.value})
    }


    handleSubmit(event){
        alert(`A text has been written: ${this.state.textValue}`)
        event.preventDefault()
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Write a text about yourself
                    <textarea placeholder="Write here..." value={this.state.textValue} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Enviar"/>
            </form>
        )
    }
}


export default TextArea