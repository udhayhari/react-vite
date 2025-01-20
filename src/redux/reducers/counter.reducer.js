const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {
    console.log("---[inside reducer]---");
    console.log("---[action received]---", action);
    console.log("---[initial state]---", state);
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        case 'RESET':
            return { ...state, count: action.payload };
        default:
            return state;
    }
}

export default reducer;