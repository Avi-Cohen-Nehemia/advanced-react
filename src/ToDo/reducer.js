export const addItem = (state, { value }) => {
    return {
        ...state,
        items: [
            ...state.items,
            { task: value, completed: false }
        ]
    }      
}

export const removeItem = (state, { index }) => {
    return {
        ...state,
        items: state.items.filter((item) => item !== state.items[index])
    }
}
