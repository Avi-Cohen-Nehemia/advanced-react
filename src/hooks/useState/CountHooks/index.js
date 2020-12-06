// import useState hook
import React, { useState } from 'react'

const CountHooks = () => {

    // define the variable you want to keep track of and use useState to set its initial value
    // [state name, function to chage it] = set initial value
    const [counter, setCounter] = useState(0)

    // define an on click event
    const handleClick = () => setCounter(counter + 1)

    return (
        <p onClick={ handleClick }>{ counter }</p>
    )
}

export default CountHooks
