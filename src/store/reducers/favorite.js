const INITIAL_ESTATE = {
    counter: 0,
    movies: []
}

export const favoriteReducer = (state = INITIAL_ESTATE, action) => {
    switch (action.type) {
        case "SET_FAVORITE":
            return {
                movies: [...state.movies, action.payload],
                counter: state.movies.length + 1,
            };
        case "DELETE_FAVORITE":
            let index = state.movies.findIndex((movie) => movie.id === action.payload.id);
            state.movies.splice(index, 1);
            return {
                movies: [...state.movies],
                counter: state.movies.length,
            };
        default:
            return {
                ...state,
                counter: state.movies.length
            }
    }
}