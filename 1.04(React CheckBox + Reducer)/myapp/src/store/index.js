import {createStore} from 'redux'

const defaultState = [
    {id: 1, price: 10,name: 'Велосипед', sales: true},
    {id: 2, price: 20,name: 'Самокат', sales: false},
    {id: 3, price: 30,name: 'Скейтборд', sales: false},
    {id: 4, price: 60,name: 'Ракетка', sales: true},
    {id: 5, price: 100,name: 'Перчатки', sales: false},
    {id: 6, price: 180,name: 'Коньки', sales: false},
]

const productReducer = (state = defaultState, action) => {
    
    if(state[0].show == undefined){
        state = state.map(elem => ({...elem, show: true, showPrice: true}))
    }

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
        case 'FILTER_PRICE':
            state = state.map(elem => ({...elem, showPrice: true}))
            return state.map(elem => {
                if (!(elem.price >= action.payload.min && elem.price <= action.payload.max)){
                    elem.showPrice = false
                }
                return elem
            })
        // case 'SORT':
        //     return state.slice().sort((a,b) => b - a)
        default:
            return state
    }
}

export const store = createStore(productReducer)

