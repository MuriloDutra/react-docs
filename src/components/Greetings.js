import React from 'react'

class Greetings extends React.Component{
    constructor(props){
        super(props)
        this.state = { message: '' }
    }

    componentDidMount(){
        if(this.props.isLoggedIn){
            this.setState({message: 'Welcome back my man!'})
        }
        else{
            this.setState({message: 'Please sign up.'})
        }
    }

    render(){
        let typeOfUser;
        if(this.props.isLoggedIn){
            typeOfUser = <h1>You are a registered user</h1>
        }else{
            typeOfUser = <h1>You are a guest user</h1>
        }

        return (
            <div style={{border: 'solid', margin: 10}}>
                {typeOfUser}
                <h3>{this.state.message}</h3>
            </div>
        )
    }
}

export default Greetings