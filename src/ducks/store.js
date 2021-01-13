import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import budgetReducer from './budgetReducer';
import useReducer from './userReducer'

const rootReducer = combineReducers({
    budget: budgetReducer,
    user: useReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
