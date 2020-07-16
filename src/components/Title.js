import React from 'react'

class Title extends React.Component{

    render(){
        return (
            <div>
                {this.props.children}
                <p>{ this.props.subtitle }</p>
            </div>
        )
    }
}

export default Title