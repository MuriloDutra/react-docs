import React from 'react'
import '../styles/Header.scss'

function Header(props){
    return (
        <div className="header-body">
            <p className="show-hour">You got here at {new Date().toLocaleTimeString()}</p>
            <h1 className="header-title">{ props.title }</h1>
        </div>
    )
}

export default Header