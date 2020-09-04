import React, { forwardRef } from 'react'
import { logProps } from './LogProps'

const FancyButton = forwardRef((props, ref) =>  {
    return (
        <button onClick={() => console.log(ref)} ref={ref} className="fancyButton">
            {props.label}
        </button>
    )
})


export default logProps(FancyButton)