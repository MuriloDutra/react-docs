import React from 'react'
import PropTypes from 'prop-types';


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


Title.defaultProps = {
    subtitle: 'You have to provide "subtitle" property to <Title />'
}


Title.propTypes = {
    subtitle: PropTypes.string,
    children: PropTypes.element.isRequired  //Single child - This must be exactly one element or it will warn.
}


export default Title