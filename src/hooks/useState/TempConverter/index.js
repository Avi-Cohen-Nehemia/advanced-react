import React, { useState } from 'react';

const TempConvertor = () => {

    const [celsius, setCelsius] = useState('')
    const [fahrenheit, setFahrenheit] = useState('')

    const handleCelsius = (e) => {
        let celsiusValue = e.currentTarget.value;

        setFahrenheit(celsiusValue !== '' ? celsiusValue * 1.8 + 32 : '')
        setCelsius(celsiusValue)
    }

    const handleFahrenheit = (e) => {
        let fahrenheitsValue = e.currentTarget.value;

        setFahrenheit(fahrenheitsValue)
        setCelsius(fahrenheitsValue !== '' ? (fahrenheitsValue - 32) / 1.8 : '')
    }

    return (
        <form>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label htmlFor='celsius'>{'°C'}</label>
                    <input
                        id='celsius'
                        value={celsius}
                        onChange={(e) => handleCelsius(e)}
                        className='form-control'
                        type='number'
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label htmlFor='fahrenheit'>{'°F'}</label>
                    <input
                        id='fahrenheit'
                        value={fahrenheit}
                        onChange={(e) => handleFahrenheit(e)}
                        className='form-control'
                        type='number'
                    />
                </div>
            </div>
        </form>
    );
}

export default TempConvertor;
