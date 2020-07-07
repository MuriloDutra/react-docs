import React from 'react'

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

class TemperatureInput extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(event){
        this.props.onTemperatureChange(event.target.value)
    }


    render(){
        const temperature = this.props.temperature
        const scale = this.props.scale

        return(
            <fieldset style={{marginTop: 50, padding: 20, width: '50%', marginLeft: '25%'}}>
                <legend>Informe a temperatura em {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        )
    }
}

export default TemperatureInput