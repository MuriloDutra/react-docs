import React from 'react'
import TemperatureInput from './TemperatureInput '
import BoilingVerdict from './BoilingVerdict'

class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)

        this.state = {
            temperature: '',
            scale: 'c'
        }
    }


    toCelsius(fahrenheit){
        return (fahrenheit - 32 ) * 5 / 9
    }


    toFahrenheit(celsius){
        return (celsius * 9 / 5) + 32
    }


    tryConvert(temperature, convert){
        const input = parseFloat(temperature)

        if(Number.isNaN(input)){
            return ''
        }

        const output = convert(input)
        const rounded = Math.round(output * 100) / 1000

        return rounded.toString()
    }


    handleCelsiusChange(temperature){
        this.setState({scale: 'c', temperature})
    }


    handleFahrenheitChange(temperature){
        this.setState({scale: 'f', temperature})
    }


    render(){
        const scale = this.state.scale
        const temperature = this.state.temperature
        const celsius = scale == 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature
        const fahrenheit = scale == 'c' ? this.tryConvert(temperature, this.toFahrenheit) : temperature


        return(
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict celsius={parseFloat(celsius)}/>
            </div>
        )
    }
}

export default Calculator