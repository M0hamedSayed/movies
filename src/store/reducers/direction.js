const INITIAL_DIRECTION = {
    currentDirection: "ltr",
}

export const directionReducer = (state = INITIAL_DIRECTION, action) => {
    switch (action.type) {
        case "SET_DIRECTION":
            return {
                ...state,
                currentDirection: action.payload
            };
        default:
            return state;
    }
}