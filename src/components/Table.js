import React from 'react'

function Table(props){
    function renderLines(){
        return props.numbers.map(number =>
            <li key={number}>Esta é a linha {number}</li>
        )
    }

    if(!props.numbers){
        return null
    }

    return (
        <ul>
            {renderLines()}
        </ul>
    )
}

export default Table