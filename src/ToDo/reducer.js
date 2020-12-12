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
        items: state.items.filter((_, i) => i !== index)
    }
}

export const updateItem = (state, { index, value }) => {

    let items = [...state.items]

    items[index] = {
        ...state.items[index],
        task: value
    }

    return {
        ...state,
        items: items
    }
}
