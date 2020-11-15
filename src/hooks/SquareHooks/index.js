import React, { useState } from 'react'

const SquareHooks = () => {
    const [isGreen, setColor] = useState(true)
    const handleClick = () => setColor(!isGreen)

    return(
        <div
            onClick={ handleClick }
            style={{
                height: '200px',
                width: '200px',
                backgroundColor: isGreen ? 'green' : 'hotpink'
            }}
        >
        </div>
    )
}

export default SquareHooks
