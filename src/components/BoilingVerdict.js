import React from 'react'

class BoilingVerdict extends React.Component{
    render(){
        const {celsius} = this.props
        var message = ''

        if(!celsius){
            return null
        }
        
        message = celsius >= 100 ? 'A água ferveria.' : 'A água não ferveria.'

        return(
            <p style={{color: 'white'}}>{message}</p>
        )
    }
}


export default BoilingVerdict