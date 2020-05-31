import React from 'react'

class Clock extends React.Component{
    constructor(props){
        super(props)
        this.timerID = null
        this.state = {
            date: new Date()
        }
    }

    componentDidMount(){
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    updateStateUsingProps(){
        this.setState((previousState, props) => {
            //Essa função receberá o state anterior como o primeiro argumento e as props no momento em que a atualização for aplicada como o segundo argumento
            console.log(`State anterior: ${previousState} | Props depois da atulização do state: ${props}`)
        })
    }

    tick(){
        this.setState({date: new Date()})
    }

    render(){
        return(
            <div>
                <p>Now it is {this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default Clock