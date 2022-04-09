import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import combineReducer from './reducers/combineReducer'

export const store = createStore(combineReducer, composeWithDevTools(applyMiddleware(thunk)));