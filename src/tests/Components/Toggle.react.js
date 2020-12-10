import React, { useState } from 'react'

export default function Toggle(props){
    const [state, setState] = useState(false)

    function changeStateValue(){
        setState(previousState => !previousState)
        props.onChange(!state)
    }

    return (
        <button onClick={changeStateValue} data-testid='toggle'>
            {state === true ? 'Turn off' : 'Turn on'}
        </button>
    )
}