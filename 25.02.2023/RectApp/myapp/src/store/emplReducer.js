const defaultState = [
    {id: 1,name: 'Alex'},
    {id: 2,name: 'Neena'},
    {id: 3,name: 'Steven'},
]


export const emplReducer = (state = defaultState, action) => {
    switch (action.type){
        case 'ADD_EMPL': 
            return [...state, {id: Date.now(), name: action.payload }]
        default:
            return state
    }
}