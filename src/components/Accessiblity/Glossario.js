import React from 'react'
import ItemsList from './ItemsList'

class Glossario extends React.Component{
    render(){
        const array = [0, 1, 2]
        return(
            <dl>
                {array.map(item => 
                    <ItemsList key={item}/>
                )}
            </dl>
        )
    }
}

export default Glossario