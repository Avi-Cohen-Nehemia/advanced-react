import React, { useState } from 'react'

const PasswordStrength = () => {

    const [color, setColor] = useState('')
    const [input, setInput] = useState('')
    const handleChange = (e) => {

        let value = e.currentTarget.value
        setInput(value)

        if (value.length < 1 ) {
            setColor('');
        } else if (value.length < 9) {
            setColor('red');
        } else if (value.length < 16) {
            setColor('orange');
        } else {
            setColor('green');
        }
    }

    return (
        <div>
            <label forhtml='password'>{'Password'}</label>
            <input
                value={input}
                onChange={handleChange}
                type='password'
                id='password'
                style={{backgroundColor: color}}
            />
        </div>
    )
}

export default PasswordStrength
