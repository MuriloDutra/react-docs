import React from 'react'


class Reservation extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        }
        
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleInputChange(event){
        const target = event.target
        const newValue = target.name === 'isGoing' ? target.checked : target.value
        const name = target.name

        this.setState({[name]: newValue})
    }


    handleSubmit(event){
        alert(`A form has been sent: isGoing - ${this.state.isGoing} | numberOfGuests - ${this.state.numberOfGuests}`)
        event.preventDefault()
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Estão indo:
                    <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange}/>
                </label>

                <br />

                <label>
                    Número de convidados:
                    <input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange}/>
                </label>
            </form>
        )
    }
}


export default Reservation