
const defaultState = 'Default string'

const UPPER = 'UPPER'
const LOWER = 'LOWER'
const SET_STRING = 'SET_STRING'
const INIT_CAP = 'INIT_CAP'

export const stringReducer = (state = defaultState, action) => {
    switch(action.type){
        case UPPER:
            return state.toUpperCase()
        case LOWER:
            return state.toLowerCase()
        case SET_STRING:
            return action.payload
        case INIT_CAP:
            let array_string = state.split(' ')
            let result = array_string.map(elem => elem[0].toUpperCase() + elem.slice(1).toLowerCase())
            return result.join(' ')
        default: 
            return state
    }
}

export const upperAction = () => ({type: UPPER})
export const lowerAction = () => ({type: LOWER})
export const setStringAction = (payload) => ({type: SET_STRING, payload})
export const initCapAction = () => ({type: INIT_CAP})