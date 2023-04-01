import {createStore} from 'redux'

const defaultState = [
    {id: 1, name: 'Велосипед', sales: true},
    {id: 2, name: 'Самокат', sales: false},
    {id: 3, name: 'Скейтборд', sales: false},
    {id: 4, name: 'Ракетка', sales: true},
    {id: 5, name: 'Перчатки', sales: false},
    {id: 6, name: 'Коньки', sales: false},
]

const productReducer = (state = defaultState, action) => {
    state = state.map(elem => ({...elem, show: true}))

    switch (action.type){
        case 'SALES_CHECKBOX':
            if (action.payload){
                return state.map(elem => {
                    if (!elem.sales){
                        elem.show = false
                    }
                    return elem
                })
            } else {
                return state.map(elem => ({...elem, show: true}))
            }
        default:
            return state
    }
}

export const store = createStore(productReducer)