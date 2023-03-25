
const data = [
    {id: 1, name: 'Alex', email: 'alex@mail.com'},
    {id: 2, name: 'Steven', email: 'steven@mail.com'},
    {id: 3, name: 'Neena', email: 'neena@mail.com'},
    {id: 4, name: 'John', email: 'john@mail.com'},
]

const defaultState = JSON.parse(localStorage.getItem('empl')) ?? data


export const emplReducer = (state = defaultState, action) => {
    switch (action.type){
        case 'DELETE_EMPL':
            return state.filter((elem, ind) => ind != (state.length - 1))
        case 'ADD_ASYNC_EMPL':
            return [...state, ...action.payload]
        default:
            return state
    }
}