import {applyMiddleware, combineReducers, createStore} from 'redux'
import { countReducer } from './countReducer'
import { stringReducer } from './stringReducer'
import { userReducer } from './usersReducer'
import { thunk } from 'redux-thunk'

import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persingConfig = {
    key: 'localStore',
    storage,
    whitelist: ['users', 'count'],
    blacklist: ['_persist'],
    // version: 2.5
}

const rootReducer = combineReducers({
    count: countReducer,
    string: stringReducer,
    users: userReducer
})

const persistedReducer = persistReducer(persingConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))

export const persistor = persistStore(store)
