import React, { useReducer } from 'react'

// Initial State
const initialState = {
    clicked: false
}


// Reducer
const clicked = (state, action) => {
    return {
        ...state,
        clicked: true
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'CLICKED': return clicked(state, action)
        default: return state;
    }
}

// Component
const ClickedReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <p onClick={ () => dispatch( {type: 'CLICKED'} )} >
            {state.clicked ? 'Clicked!' : 'Not Clicked'}
        </p>
    )
}

export default ClickedReducer