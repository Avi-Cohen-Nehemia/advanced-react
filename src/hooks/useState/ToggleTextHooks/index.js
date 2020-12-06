import React, { useState } from 'react'

const ToggleTextHooks = () => {

    const [text, toggleText] = useState(true)
    const handleClick = () => toggleText(!text)

    return (
        <>
            <p>{ text ? 'Hello' : 'World' }</p>
            <button onClick={ handleClick }>{'Toggle'}</button>
        </>
    )
}

export default ToggleTextHooks
