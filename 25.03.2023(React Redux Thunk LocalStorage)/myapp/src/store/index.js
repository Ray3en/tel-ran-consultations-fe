import {applyMiddleware, combineReducers, createStore} from 'redux'
import { emplReducer } from './emplReducer'
import thunk from 'redux-thunk'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'data',
    storage,
    version: 2.3,
    whitelist: ['string'] 
}

const rootReducer = combineReducers({
    empl: emplReducer,
    number: () => 1000,
    string: () => 'STRING!'
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)