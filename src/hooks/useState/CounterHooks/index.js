import React, { useState } from 'react'

const CounterHooks = ({ initial, max }) => {

    const [counter, setCounter] = useState(initial)

    const handleDecrement = () => counter > 0 ? setCounter(counter - 1) : setCounter(counter)
    const handleIncrement = () => counter < max ? setCounter(counter + 1) : setCounter(counter)

    return (
        <>
            <p>{ counter }</p>
            <button onClick={ handleDecrement }>{'-'}</button>
            <button onClick={ handleIncrement }>{'+'}</button>
        </>
    )
}

export default CounterHooks
