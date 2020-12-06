import React, { useReducer } from 'react'

// Initial State
const initialState = {
    celsius: '',
    fahrenheit: '',
}

// Reducer
const changeCelsius = (state, action) => {
    return {
        ...state,
        celsius: action.value,
        fahrenheit: action.value !== '' ? action.value * 1.8 + 32 : ''
    }
}

const changeFahrenheit = (state, action) => {
    return {
        ...state,
        celsius: action.value !== '' ? (action.value - 32) / 1.8 : '',
        fahrenheit: action.value
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

    return (
        <form>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label htmlFor='celsius'>{'°C'}</label>
                    <input
                        id='celsius'
                        value={state.celsius}
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
                        value={state.fahrenheit}
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
