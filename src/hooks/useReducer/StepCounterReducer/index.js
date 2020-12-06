import React, { useReducer } from 'react'

// Initial State
const initialState = {
    steps: 0
}

// Reducer
const increment = (state, action) => {
    const { steps } = state
    const { step, max } = action

    return {
        ...state,
        steps: steps < max ? steps + step : steps
    }
}

const decrement = (state, action) => {
    const { steps } = state
    const { step } = action

    return {
        ...state,
        steps: steps > 0 ? steps - step : steps
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT': return increment(state, action)
        case 'DECREMENT': return decrement(state, action)
        default: return state;
    }
}

// Component
const StepCounterReducer = ({ max, step }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <p>{state.steps}</p>
            <button onClick={ () => dispatch( {type: 'DECREMENT', step: step} )}>{'-'}</button>
            <button onClick={ () => dispatch( {type: 'INCREMENT', step: step, max: max} )}>{'+'}</button>
        </div>
    )
}

export default StepCounterReducer
