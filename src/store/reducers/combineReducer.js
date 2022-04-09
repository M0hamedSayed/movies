import { combineReducers } from 'redux';
import { directionReducer } from './direction';
import { favoriteReducer } from './favorite';
import { moviesReducer } from './movies';

export default combineReducers({
    direction: directionReducer,
    favorites: favoriteReducer,
    movies: moviesReducer
})