import {applyMiddleware, combineReducers, createStore} from 'redux'
import { emplReducer } from './emplReducer'
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
    empl: emplReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))