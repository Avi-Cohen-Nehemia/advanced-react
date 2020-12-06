import React, { useReducer } from 'react'

// Initial State
const initialState = {
    celsius: '',
    fahrenheit: '',
}

// Reducer
const changeCelsius = (state, action) => {
    const { value } = action
    return {
        ...state,
        celsius: value,
        fahrenheit: value !== '' ? value * 1.8 + 32 : ''
    }
}

const changeFahrenheit = (state, action) => {
    const { value } = action
    return {
        ...state,
        celsius: value !== '' ? (value - 32) / 1.8 : '',
        fahrenheit: value
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'CELSIUS': return changeCelsius(state, action)
        case 'FAHRENHEIT': return changeFahrenheit(state, action)
        default: return state;
    }
}

// Component
const TempConverterReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const { celsius, fahrenheit } = state

    return (
        <form>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label htmlFor='celsius'>{'°C'}</label>
                    <input
                        id='celsius'
                        value={celsius}
                        onChange={(e) => dispatch({ type: 'CELSIUS', value: e.currentTarget.value })}
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
                        onChange={(e) => dispatch({ type: 'FAHRENHEIT', value: e.currentTarget.value })}
                        className='form-control'
                        type='number'
                    />
                </div>
            </div>
        </form>
    )
}

export default TempConverterReducer
