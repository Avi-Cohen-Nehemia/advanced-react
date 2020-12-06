import React, { useState } from 'react'

const RollCall = ({ names }) => {

    const [index, setIndex] = useState(0)

    const handleClick = () => setIndex((index + 1) % names.length)

    return (
        <>
            <p>{names[index]}</p>
            <button onClick={handleClick}>{'Next'}</button>
        </>
    )
}

export default RollCall
