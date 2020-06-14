import React from 'react'

class Select extends React.Component{
    constructor(props){
        super(props)
        this.state = { valueOption: 'coco' }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange(event){
        this.setState({ valueOption: event.target.value})
    }


    handleSubmit(event){
        alert(`A option has been selected: ${this.state.valueOption}`)
        event.preventDefault()
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Select your favorite flavor:
                    <select value={this.state.valueOption} onChange={this.handleChange}>
                        <option value="orange">Orange</option>
                        <option value="limon">Limon</option>
                        <option value="coco">Coco</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Enviar"/>
            </form>
        )
    }
}


export default Select