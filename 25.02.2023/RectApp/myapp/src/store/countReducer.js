const defaultState = 0


export const countReducer = (state = defaultState, action) => {
    switch (action.type){
        case 'INCR':
            return state + action.payload
        case 'DECR':
            return state - action.payload
        case 'RESET':
            return 0
        default:
            return state
    }
}