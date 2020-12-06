import React, { useState } from 'react'

const ClickedHooks = () => {

    const [text, setText] = useState('Not Clicked')
    const handleClick = () => setText('Clicked!')

    return (
        <p onClick={ handleClick }>{ text }</p>
    )
}

export default ClickedHooks
