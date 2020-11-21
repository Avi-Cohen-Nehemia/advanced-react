import React, { useState } from 'react'

const StepCounter = ({ max, step }) => {

    const [counter, setCounter] = useState(0)

    const handleDecrement = () => counter > 0 ? setCounter(counter - step) : setCounter(counter)
    const handleIncrement = () => counter < max ? setCounter(counter + step) : setCounter(counter)

    return (
        <>
            <p>{ counter }</p>
            <button onClick={ handleDecrement }>{'-'}</button>
            <button onClick={ handleIncrement }>{'+'}</button>
        </>
    )
}

export default StepCounter
