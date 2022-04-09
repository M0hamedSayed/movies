const INITIAL_MOVIES = {
    list: []
}


export const moviesReducer = (state = INITIAL_MOVIES, action) => {
    switch (action.type) {
        case "GET_MOVIES":
            return {
                ...state,
                list: action.payload
            };
        default:
            return state
    }

}