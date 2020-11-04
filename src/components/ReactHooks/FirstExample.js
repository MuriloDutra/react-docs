import React, { useState } from 'react'


function FirstExample(){
    const [count, setCount] = useState(0)


    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>CLICK HERE</button>
        </div>
    )
}


export default FirstExample