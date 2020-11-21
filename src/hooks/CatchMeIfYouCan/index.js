import React, { useState } from 'react'

const CatchMeIfYouCan = ({ jump }) => {

    const [position, setPosition] = useState(0)

    const handleClick = () => setPosition(position + jump)

    return (
        <button
            style={{position: 'relative', top: `${position}px`}}
            onClick={handleClick}
        >
            {'Catch Me!'}
        </button>
    )
}

export default CatchMeIfYouCan
